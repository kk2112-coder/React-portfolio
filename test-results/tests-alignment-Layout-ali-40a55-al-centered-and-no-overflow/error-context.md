# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\alignment.spec.ts >> Layout alignment audit >> Office ID modal centered and no overflow
- Location: tests\alignment.spec.ts:57:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5173/
Call log:
  - navigating to "http://localhost:5173/", waiting until "load"

```

# Test source

```ts
  1  | // Alignment audit tests for Portfolio site
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | function approxEqual(a: number, b: number, tolerance = 2) {
  5  |   return Math.abs(a - b) <= tolerance;
  6  | }
  7  | 
  8  | test.describe('Layout alignment audit', () => {
  9  |   test.beforeEach(async ({ page }) => {
> 10 |     await page.goto('http://localhost:5173');
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5173/
  11 |     await page.waitForLoadState('domcontentloaded');
  12 |   });
  13 | 
  14 |   test('Navbar items vertically aligned', async ({ page }) => {
  15 |     const brand = page.locator('header').getByRole('link', { name: /krishan kant/i });
  16 |     const navLinks = await page.locator('header nav').getByRole('link').all();
  17 |     const brandBox = await brand.boundingBox();
  18 |     expect(brandBox).not.toBeNull();
  19 |     const brandTop = brandBox!.y;
  20 |     for (const link of navLinks) {
  21 |       const box = await link.boundingBox();
  22 |       expect(box).not.toBeNull();
  23 |       expect(approxEqual(box!.y, brandTop, 4)).toBeTruthy();
  24 |     }
  25 |   });
  26 | 
  27 |   test('Hero CTA group centered horizontally', async ({ page }) => {
  28 |     const viewport = page.viewportSize();
  29 |     expect(viewport).not.toBeNull();
  30 |     const ctaGroup = page.locator('[data-testid="hero-cta-group"]');
  31 |     await expect(ctaGroup).toBeVisible();
  32 |     const box = await ctaGroup.boundingBox();
  33 |     expect(box).not.toBeNull();
  34 |     const leftDiff = box!.x;
  35 |     const rightDiff = viewport!.width - (box!.x + box!.width);
  36 |     expect(approxEqual(leftDiff, rightDiff, 5)).toBeTruthy();
  37 |   });
  38 | 
  39 |   test('About avatar column consistent height and button placement', async ({ page }) => {
  40 |     const avatarColumn = page.locator('[data-testid="about-avatar-column"]');
  41 |     const toggleBtn = avatarColumn.getByRole('button', { name: /photograph|developer art/i }).first();
  42 |     const idBtn = avatarColumn.locator('[data-testid="about-id-button"]');
  43 |     // Ensure avatar column height does not change after toggles
  44 |     const heightBefore = await avatarColumn.boundingBox().then(b => b!.height);
  45 |     await toggleBtn.click();
  46 |     await page.waitForTimeout(200);
  47 |     const heightAfter = await avatarColumn.boundingBox().then(b => b!.height);
  48 |     expect(approxEqual(heightBefore, heightAfter, 2)).toBeTruthy();
  49 |     // Ensure ID button sits below toggle group without overlap
  50 |     const btnBox = await idBtn.boundingBox();
  51 |     const toggleBox = await toggleBtn.boundingBox();
  52 |     expect(btnBox).not.toBeNull();
  53 |     expect(toggleBox).not.toBeNull();
  54 |     expect(btnBox!.y).toBeGreaterThan(toggleBox!.y + toggleBox!.height);
  55 |   });
  56 | 
  57 |   test('Office ID modal centered and no overflow', async ({ page }) => {
  58 |     const idPassBtn = page.getByRole('button', { name: /view 3d office id badge|id pass/i }).first();
  59 |     await idPassBtn.click();
  60 |     const idModal = page.locator('[role="dialog"][aria-label="Office ID Badge"]');
  61 |     await expect(idModal).toBeVisible();
  62 |     const viewport = page.viewportSize()!;
  63 |     const modalBox = await idModal.boundingBox();
  64 |     expect(modalBox).not.toBeNull();
  65 |     const modalCenterX = modalBox!.x + modalBox!.width / 2;
  66 |     const modalCenterY = modalBox!.y + modalBox!.height / 2;
  67 |     expect(approxEqual(modalCenterX, viewport.width / 2, 5)).toBeTruthy();
  68 |     expect(approxEqual(modalCenterY, viewport.height / 2, 5)).toBeTruthy();
  69 |     // Check no horizontal scroll
  70 |     const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
  71 |     expect(scrollWidth).toBeLessThanOrEqual(viewport.width);
  72 |   });
  73 | 
  74 |   test('No horizontal overflow across viewport sizes', async ({ page }) => {
  75 |     const sizes = [
  76 |       { width: 1440, height: 900 },
  77 |       { width: 1024, height: 768 },
  78 |       { width: 375, height: 667 },
  79 |     ];
  80 |     for (const sz of sizes) {
  81 |       await page.setViewportSize(sz);
  82 |       await page.reload();
  83 |       const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
  84 |       expect(scrollWidth).toBeLessThanOrEqual(sz.width);
  85 |     }
  86 |   });
  87 | });
  88 | 
```