import { test, expect } from '@playwright/test';

test.describe('Portfolio site end-to-end suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForLoadState('domcontentloaded');
  });

  test('Navbar links and brand scroll appropriately', async ({ page }) => {
    // Brand click scrolls to top
    const brandLink = page.getByRole('link', { name: /krishan kant/i });
    await expect(brandLink).toBeVisible();
    await brandLink.click();

    // Verify nav links exist and can be clicked
    const sections = [
      { name: 'Projects', target: '#projects' },
      { name: 'About', target: '#about' },
      { name: 'Contact', target: '#contact' },
      { name: 'Home', target: '#hero' },
    ];

    for (const sec of sections) {
      const link = page.getByRole('link', { name: sec.name, exact: true });
      await expect(link).toBeVisible();
      await link.click();
      await page.waitForTimeout(300);
      const element = await page.$(sec.target);
      expect(element).not.toBeNull();
    }
  });

  test('AI modal opens with UI button and keyboard shortcut, and closes properly', async ({ page }) => {
    // 1. Open via UI button
    const askAiBtn = page.getByRole('button', { name: /ask ai/i }).first();
    await expect(askAiBtn).toBeVisible();
    await askAiBtn.click();

    const modal = page.locator('[role="dialog"][aria-label="AI Assistant"]');
    await expect(modal).toBeVisible();

    // Close via close button
    const closeBtn = modal.getByRole('button', { name: /close/i });
    await closeBtn.click();
    await expect(modal).toBeHidden();

    // 2. Open via keyboard shortcut (Control+K on Windows, Meta+K on Mac)
    await page.keyboard.press('Control+KeyK');
    await expect(modal).toBeVisible({ timeout: 5000 });

    // Send a message via preset chip
    const preset = modal.getByRole('button', { name: /top skills/i });
    if (await preset.isVisible()) {
      await preset.click();
      await expect(modal.getByText(/frontend|react 19/i)).toBeVisible({ timeout: 5000 });
    }

    // Close modal with Escape key
    await page.keyboard.press('Escape');
    await expect(modal).toBeHidden();
  });

  test('Hero in-page AI widget answers user questions', async ({ page }) => {
    const input = page.getByLabel('Ask AI');
    await expect(input).toBeVisible();
    await input.fill('What are your top skills?');
    await input.press('Enter');

    const response = page.locator('.ai-response');
    await expect(response).toBeVisible({ timeout: 5000 });
    await expect(response).toContainText(/React 19|Full-Stack/i);
  });

  test('Project filtering by category and details modal', async ({ page }) => {
    // Check initial cards count
    const initialCards = await page.locator('.project-card').all();
    expect(initialCards.length).toBeGreaterThan(0);

    // Filter by Web Apps
    const webFilterBtn = page.getByRole('button', { name: 'Web Apps', exact: true });
    await expect(webFilterBtn).toBeVisible();
    await webFilterBtn.click();

    // Verify cards are filtered
    const filteredCards = await page.locator('.project-card').all();
    expect(filteredCards.length).toBeGreaterThan(0);

    // Open first project's details
    const detailsBtn = page.getByRole('button', { name: /quick details/i }).first();
    await detailsBtn.click();

    const projectModal = page.locator('[role="dialog"][aria-label="Project Details"]');
    await expect(projectModal).toBeVisible();

    // Close modal
    const closeBtn = projectModal.getByRole('button', { name: /close/i });
    await closeBtn.click();
    await expect(projectModal).toBeHidden();
  });

  test('About section toggles avatar mode and opens dedicated 3D Office ID Badge Modal', async ({ page }) => {
    // 1. Toggle to Photograph in About section
    const photoToggleBtn = page.getByRole('button', { name: /photograph/i });
    await expect(photoToggleBtn).toBeVisible();
    await photoToggleBtn.click();

    // Check image avatar is visible
    const avatarImg = page.getByAltText('Krishan Kant').first();
    await expect(avatarImg).toBeVisible();

    // 2. Toggle back to developer art
    const artToggleBtn = page.getByRole('button', { name: /developer art/i });
    await expect(artToggleBtn).toBeVisible();
    await artToggleBtn.click();

    // 3. Open dedicated 3D Office ID Badge Modal from Navbar
    const idPassBtn = page.getByRole('button', { name: /view 3d office id badge|id pass/i }).first();
    await expect(idPassBtn).toBeVisible();
    await idPassBtn.click();

    const idModal = page.locator('[role="dialog"][aria-label="Office ID Badge"]');
    await expect(idModal).toBeVisible();

    // Verify 3D card exists inside modal
    const idCard = idModal.getByRole('button', { name: /office id card - click to flip/i });
    await expect(idCard).toBeVisible();

    // Verify flip button inside modal
    const flipBtn = idModal.getByRole('button', { name: /flip id card|view front badge/i });
    await expect(flipBtn).toBeVisible();
    await flipBtn.click();
    await page.waitForTimeout(300);

    // Flip back
    await flipBtn.click();
    await page.waitForTimeout(300);

    // Close modal via Escape
    await page.keyboard.press('Escape');
    await expect(idModal).toBeHidden();
  });

  test('Contact form submits successfully and displays feedback', async ({ page }) => {
    // Fill contact form
    const nameInput = page.getByLabel('Name');
    const emailInput = page.getByLabel('Email');
    const messageInput = page.getByLabel('Message');

    await nameInput.fill('Tester Pro');
    await emailInput.fill('tester@example.com');
    await messageInput.fill('Loved your portfolio! Let us connect for an engineering opportunity.');

    const sendBtn = page.getByRole('button', { name: /send message/i });
    await sendBtn.click();

    const successMsg = page.getByText(/Message sent successfully/i);
    await expect(successMsg).toBeVisible({ timeout: 5000 });
  });

  test('Light mode switches cleanly with high text contrast on all elements', async ({ page }) => {
    // 1. Switch to light mode
    const themeBtn = page.getByRole('button', { name: /switch to light mode/i });
    await expect(themeBtn).toBeVisible();
    await themeBtn.click();

    // Verify html does not have dark class
    const htmlHasDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    expect(htmlHasDark).toBeFalsy();

    // 2. Check main heading color is dark slate (#0f172a or rgb(15, 23, 42))
    const heading = page.locator('h1').first();
    const headingColor = await heading.evaluate((el) => window.getComputedStyle(el).color);
    expect(headingColor).toBe('rgb(15, 23, 42)');

    // 3. Check cyan accent text is high-contrast sky/cyan, NOT washed-out pale color
    const typewriterRole = page.locator('#hero .font-mono.text-cyan-400 span.font-semibold').first();
    const roleColor = await typewriterRole.evaluate((el) => window.getComputedStyle(el).color);
    expect(roleColor).toBe('rgb(2, 132, 199)');

    const input = page.getByLabel('Ask AI');
    const inputBg = await input.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    const inputColor = await input.evaluate((el) => window.getComputedStyle(el).color);
    expect(inputColor.includes('15, 23, 42') || inputColor.includes('oklab(0.207')).toBeTruthy();
    expect(inputBg.includes('255, 255, 255') || inputBg.includes('oklab(0.999')).toBeTruthy();

    // 5. Toggle back to dark mode
    const switchDarkBtn = page.getByRole('button', { name: /switch to dark mode/i });
    await expect(switchDarkBtn).toBeVisible();
    await switchDarkBtn.click();
    const isDarkAgain = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    expect(isDarkAgain).toBeTruthy();
  });
});
