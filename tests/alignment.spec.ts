// Alignment audit tests for Portfolio site
import { test, expect } from '@playwright/test';

function approxEqual(a: number, b: number, tolerance = 2) {
  return Math.abs(a - b) <= tolerance;
}

test.describe('Layout alignment audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForLoadState('domcontentloaded');
  });

  test('Navbar items vertically aligned', async ({ page }) => {
    const brand = page.locator('header').getByRole('link', { name: /krishan kant/i });
    const navLinks = await page.locator('header nav').getByRole('link').all();
    const brandBox = await brand.boundingBox();
    expect(brandBox).not.toBeNull();
    const brandTop = brandBox!.y;
    for (const link of navLinks) {
      const box = await link.boundingBox();
      expect(box).not.toBeNull();
      expect(approxEqual(box!.y, brandTop, 4)).toBeTruthy();
    }
  });

  test('Hero CTA group centered horizontally', async ({ page }) => {
    const viewport = page.viewportSize();
    expect(viewport).not.toBeNull();
    const ctaGroup = page.locator('[data-testid="hero-cta-group"]');
    await expect(ctaGroup).toBeVisible();
    const box = await ctaGroup.boundingBox();
    expect(box).not.toBeNull();
    const leftDiff = box!.x;
    const rightDiff = viewport!.width - (box!.x + box!.width);
    expect(approxEqual(leftDiff, rightDiff, 5)).toBeTruthy();
  });

  test('About avatar column consistent height and button placement', async ({ page }) => {
    const avatarColumn = page.locator('[data-testid="about-avatar-column"]');
    const toggleBtn = avatarColumn.getByRole('button', { name: /photograph|developer art/i }).first();
    const idBtn = avatarColumn.locator('[data-testid="about-id-button"]');
    // Ensure avatar column height does not change after toggles
    const heightBefore = await avatarColumn.boundingBox().then(b => b!.height);
    await toggleBtn.click();
    await page.waitForTimeout(200);
    const heightAfter = await avatarColumn.boundingBox().then(b => b!.height);
    expect(approxEqual(heightBefore, heightAfter, 2)).toBeTruthy();
    // Ensure ID button sits below toggle group without overlap
    const btnBox = await idBtn.boundingBox();
    const toggleBox = await toggleBtn.boundingBox();
    expect(btnBox).not.toBeNull();
    expect(toggleBox).not.toBeNull();
    expect(btnBox!.y).toBeGreaterThan(toggleBox!.y + toggleBox!.height);
  });

  test('Office ID modal centered and no overflow', async ({ page }) => {
    const idPassBtn = page.getByRole('button', { name: /view 3d office id badge|id pass/i }).first();
    await idPassBtn.click();
    const idModal = page.locator('[role="dialog"][aria-label="Office ID Badge"]');
    await expect(idModal).toBeVisible();
    const viewport = page.viewportSize()!;
    const modalBox = await idModal.boundingBox();
    expect(modalBox).not.toBeNull();
    const modalCenterX = modalBox!.x + modalBox!.width / 2;
    const modalCenterY = modalBox!.y + modalBox!.height / 2;
    expect(approxEqual(modalCenterX, viewport.width / 2, 5)).toBeTruthy();
    expect(approxEqual(modalCenterY, viewport.height / 2, 5)).toBeTruthy();
    // Check no horizontal scroll
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(viewport.width);
  });

  test('No horizontal overflow across viewport sizes', async ({ page }) => {
    const sizes = [
      { width: 1440, height: 900 },
      { width: 1024, height: 768 },
      { width: 375, height: 667 },
    ];
    for (const sz of sizes) {
      await page.setViewportSize(sz);
      await page.reload();
      const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(scrollWidth).toBeLessThanOrEqual(sz.width);
    }
  });
});
