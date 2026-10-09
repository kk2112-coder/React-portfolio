# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\portfolio.spec.ts >> Portfolio site end-to-end suite >> Project filtering by category and details modal
- Location: tests\portfolio.spec.ts:74:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5173/
Call log:
  - navigating to "http://localhost:5173/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Portfolio site end-to-end suite', () => {
  4   |   test.beforeEach(async ({ page }) => {
> 5   |     await page.goto('http://localhost:5173');
      |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5173/
  6   |     await page.waitForLoadState('domcontentloaded');
  7   |   });
  8   | 
  9   |   test('Navbar links and brand scroll appropriately', async ({ page }) => {
  10  |     // Brand click scrolls to top
  11  |     const brandLink = page.getByRole('link', { name: /krishan kant/i });
  12  |     await expect(brandLink).toBeVisible();
  13  |     await brandLink.click();
  14  | 
  15  |     // Verify nav links exist and can be clicked
  16  |     const sections = [
  17  |       { name: 'Projects', target: '#projects' },
  18  |       { name: 'About', target: '#about' },
  19  |       { name: 'Contact', target: '#contact' },
  20  |       { name: 'Home', target: '#hero' },
  21  |     ];
  22  | 
  23  |     for (const sec of sections) {
  24  |       const link = page.getByRole('link', { name: sec.name, exact: true });
  25  |       await expect(link).toBeVisible();
  26  |       await link.click();
  27  |       await page.waitForTimeout(300);
  28  |       const element = await page.$(sec.target);
  29  |       expect(element).not.toBeNull();
  30  |     }
  31  |   });
  32  | 
  33  |   test('AI modal opens with UI button and keyboard shortcut, and closes properly', async ({ page }) => {
  34  |     // 1. Open via UI button
  35  |     const askAiBtn = page.getByRole('button', { name: /ask ai/i }).first();
  36  |     await expect(askAiBtn).toBeVisible();
  37  |     await askAiBtn.click();
  38  | 
  39  |     const modal = page.locator('[role="dialog"][aria-label="AI Assistant"]');
  40  |     await expect(modal).toBeVisible();
  41  | 
  42  |     // Close via close button
  43  |     const closeBtn = modal.getByRole('button', { name: /close/i });
  44  |     await closeBtn.click();
  45  |     await expect(modal).toBeHidden();
  46  | 
  47  |     // 2. Open via keyboard shortcut (Control+K on Windows, Meta+K on Mac)
  48  |     await page.keyboard.press('Control+KeyK');
  49  |     await expect(modal).toBeVisible({ timeout: 5000 });
  50  | 
  51  |     // Send a message via preset chip
  52  |     const preset = modal.getByRole('button', { name: /top skills/i });
  53  |     if (await preset.isVisible()) {
  54  |       await preset.click();
  55  |       await expect(modal.getByText(/frontend|react 19/i)).toBeVisible({ timeout: 5000 });
  56  |     }
  57  | 
  58  |     // Close modal with Escape key
  59  |     await page.keyboard.press('Escape');
  60  |     await expect(modal).toBeHidden();
  61  |   });
  62  | 
  63  |   test('Hero in-page AI widget answers user questions', async ({ page }) => {
  64  |     const input = page.getByLabel('Ask AI');
  65  |     await expect(input).toBeVisible();
  66  |     await input.fill('What are your top skills?');
  67  |     await input.press('Enter');
  68  | 
  69  |     const response = page.locator('.ai-response');
  70  |     await expect(response).toBeVisible({ timeout: 5000 });
  71  |     await expect(response).toContainText(/React 19|Full-Stack/i);
  72  |   });
  73  | 
  74  |   test('Project filtering by category and details modal', async ({ page }) => {
  75  |     // Check initial cards count
  76  |     const initialCards = await page.locator('.project-card').all();
  77  |     expect(initialCards.length).toBeGreaterThan(0);
  78  | 
  79  |     // Filter by Web Apps
  80  |     const webFilterBtn = page.getByRole('button', { name: 'Web Apps', exact: true });
  81  |     await expect(webFilterBtn).toBeVisible();
  82  |     await webFilterBtn.click();
  83  | 
  84  |     // Verify cards are filtered
  85  |     const filteredCards = await page.locator('.project-card').all();
  86  |     expect(filteredCards.length).toBeGreaterThan(0);
  87  | 
  88  |     // Open first project's details
  89  |     const detailsBtn = page.getByRole('button', { name: /quick details/i }).first();
  90  |     await detailsBtn.click();
  91  | 
  92  |     const projectModal = page.locator('[role="dialog"][aria-label="Project Details"]');
  93  |     await expect(projectModal).toBeVisible();
  94  | 
  95  |     // Close modal
  96  |     const closeBtn = projectModal.getByRole('button', { name: /close/i });
  97  |     await closeBtn.click();
  98  |     await expect(projectModal).toBeHidden();
  99  |   });
  100 | 
  101 |   test('About section toggles avatar mode and opens dedicated 3D Office ID Badge Modal', async ({ page }) => {
  102 |     // 1. Toggle to Photograph in About section
  103 |     const photoToggleBtn = page.getByRole('button', { name: /photograph/i });
  104 |     await expect(photoToggleBtn).toBeVisible();
  105 |     await photoToggleBtn.click();
```