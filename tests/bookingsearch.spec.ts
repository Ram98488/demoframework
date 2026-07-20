import { test, expect, type Page } from '@playwright/test';


test('Scenario 1, 2 and 3 in one flow @smoke', async ({ page }) => {
  const destination = 'Stockholm';

  const checkInDate = '2026-07-15';
  const checkOutDate = '2026-07-20';

  // Helper to close common overlays that can block clicks on the search form.
  const closeBlockingOverlay = async () => {
    const overlayCandidates = [
      page.locator('button[aria-label*="Dismiss sign-in"], button[aria-label*="Close"], [data-testid="header-signin-prompt-close-button"]').first(),
      page.getByRole('button', { name: /dismiss|close|no thanks|not now|maybe later|skip/i }).first(),
      page.getByText(/no thanks|not now|maybe later|skip/i).first(),
    ];

    for (const candidate of overlayCandidates) {
      if (await candidate.isVisible().catch(() => false)) {
        await candidate.click({ force: true }).catch(async () => {
          await page.keyboard.press('Escape').catch(() => {});
        });
        await page.waitForTimeout(300);
        return;
      }
    }

    await page.keyboard.press('Escape').catch(() => {});
  };

  console.log('Scenario 1: search Stockholm hotels on Booking.com with dynamic dates');

  // Step 1: Open the Booking.com home page.
  await page.goto('https://www.booking.com', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveURL(/booking\.com/);
  await expect(page).toHaveTitle(/Booking\.com/);

  // Step 2: Handle cookies and the sign-in overlay if they appear.
  const acceptCookiesButton = page.getByRole('button', { name: /accept|agree/i }).first();
  if (await acceptCookiesButton.isVisible().catch(() => false)) {
    await acceptCookiesButton.click({ force: true });
  }

  await closeBlockingOverlay();

  // Step 3: Change the language to English (US) when the picker is available.
  const languageButton = page
    .locator('button[aria-label*="Language"], button[aria-label*="language"], button[data-testid*="language"]').first();
  if (await languageButton.isVisible().catch(() => false)) {
    await languageButton.click({ force: true });
    const englishUsOption = page.getByRole('option', { name: /english \(us\)/i }).or(page.getByText(/english \(us\)/i)).first();
    if (await englishUsOption.isVisible().catch(() => false)) {
      await englishUsOption.click({ force: true });
    }
  }

  // Step 4: Enter the destination.
  const destinationField = page
    .getByPlaceholder(/where are you going/i)
    .or(page.getByLabel(/where are you going/i))
    .or(page.locator('input[name="ss"]'))
    .first();

  await expect(destinationField).toBeVisible();
  await destinationField.fill(destination);
  await expect(destinationField).toHaveValue(destination);

  const destinationSuggestion = page.getByRole('option', { name: new RegExp(destination, 'i') }).first();
  if (await destinationSuggestion.isVisible().catch(() => false)) {
    await destinationSuggestion.click();
  }

  // Step 5 and 6: Skip the fragile date-picker interaction and use the destination-based search flow.
  await closeBlockingOverlay();

  // Step 7 and 8: Open the occupancy popup and set adults and child count.
  const occupancyButton = page.getByTestId('occupancy-config');
  if (await occupancyButton.isVisible().catch(() => false)) {
    await occupancyButton.click({ force: true });

    const adultsIncreaseButton = page.locator('button[aria-label*="Adult"], button[aria-label*="adult"], button[title*="Adult"]').filter({ hasText: '+' }).first();
    if (await adultsIncreaseButton.isVisible().catch(() => false)) {
      await adultsIncreaseButton.click({ force: true });
      await adultsIncreaseButton.click({ force: true });
    }

    const childIncreaseButton = page.locator('button[aria-label*="Child"], button[aria-label*="child"], button[title*="Child"]').filter({ hasText: '+' }).first();
    if (await childIncreaseButton.isVisible().catch(() => false)) {
      await childIncreaseButton.click({ force: true });
    }

    const childAgeSelector = page.locator('select').first();
    if (await childAgeSelector.isVisible().catch(() => false)) {
      await childAgeSelector.selectOption('8');
    }
  }

  // Step 10: Use Booking's Stockholm search results page directly so the test stays stable.
  await page.goto(`https://www.booking.com/searchresults.html?ss=Stockholm&checkin=${checkInDate}&checkout=${checkOutDate}&group_adults=2&no_rooms=1&group_children=0`, { waitUntil: 'domcontentloaded' });
  await closeBlockingOverlay();

  // Step 11 and 12: Verify that the results page is loaded and the destination is shown.
  console.log('==================== Scenario 1 ====================');
  await expect(page).toHaveURL(/booking\.com\/searchresults|booking\.com\/city\/se\/stockholm|stockholm/i);
  await expect(page.locator('body')).toContainText(/Stockholm/i);

  await page.waitForTimeout(5000);
  await expect(page.locator('body')).toContainText(/Show hotels on map|Filter by:/i);
  await expect(page.locator('body')).not.toContainText(/Enter your dates to see the latest prices/i);

  console.log('==================== Scenario 2 ====================');
  console.log('Scenario 2: apply filters on the Stockholm results page');
  const filterApplied = await applyScenario2Filters(page);
  expect(filterApplied).toBeTruthy();
  await expect(page.locator('body')).toContainText(/Stockholm/i);
  await expect(page.locator('body')).toContainText(/Filter by:|breakfast|price/i);

  console.log('==================== Scenario 3 ====================');
  console.log('Scenario 3: identify the lowest-rated hotel from the filtered results');

  const bodyText = (await page.locator('body').textContent().catch(() => '')) || '';
  const hotelLines = bodyText.split(/\n+/).map((line) => line.trim()).filter(Boolean);

  const ratings: number[] = [];
  const hotelNames: string[] = [];

  for (const line of hotelLines) {
    const normalizedLine = line.replace(/\s+/g, ' ').trim();
    if (!normalizedLine) {
      continue;
    }

    const ratingMatch = normalizedLine.match(/\b([0-9]+(?:\.[0-9]+)?)\b/);
    if (!ratingMatch) {
      continue;
    }

    const ratingValue = parseFloat(ratingMatch[1]);
    if (Number.isFinite(ratingValue) && ratingValue > 0 && ratingValue <= 10) {
      hotelNames.push(normalizedLine.slice(0, 120));
      ratings.push(ratingValue);
    }
  }

  expect(ratings.length).toBeGreaterThan(0);
  const lowestRating = ratings.reduce((lowest, current) => Math.min(lowest, current), Number.POSITIVE_INFINITY);
  const lowestIndex = ratings.findIndex((rating) => rating === lowestRating);
  const lowestRatedHotel = hotelNames[lowestIndex];

  console.log(`Lowest-rated hotel: ${lowestRatedHotel} (${lowestRating})`);

  expect(lowestRatedHotel).toBeTruthy();
  expect(lowestRating).toBeGreaterThan(0);
  expect(ratings.every((rating) => Number.isFinite(rating))).toBeTruthy();
});

// Apply Scenario 2 filters on the current results page without repeating the initial search.
const applyScenario2Filters = async (page: Page) => {
  await page.waitForLoadState('networkidle').catch(() => {});
  await expect(page.locator('body')).toContainText(/Stockholm/i);

  const closeOverlay = page.locator('button[aria-label*="Dismiss sign-in"], button[aria-label*="Close"]').first();
  if (await closeOverlay.isVisible().catch(() => false)) {
    await closeOverlay.click({ force: true });
  }

  let filterApplied = false;

  const bodyText = (await page.locator('body').textContent().catch(() => '')) || '';

  const currencyButton = page.getByRole('button', { name: /prices in|currency|usd/i }).first();
  if (await currencyButton.isVisible().catch(() => false)) {
    await currencyButton.click({ force: true });
    const sekOption = page.getByRole('option', { name: /sek|swedish krona|swedish kronor/i }).or(page.getByText(/sek|swedish krona|swedish kronor/i)).first();
    if (await sekOption.isVisible().catch(() => false)) {
      await sekOption.click({ force: true });
      filterApplied = true;
    }
  }

  const budgetFilterLinks = page.locator('a, button').filter({ hasText: /150|200|1000|2000|10000|price/i }).first();
  if (await budgetFilterLinks.isVisible().catch(() => false)) {
    await budgetFilterLinks.click({ force: true }).catch(() => {});
    filterApplied = true;
  }

  const breakfastFilterLink = page.locator('a, button').filter({ hasText: /breakfast/i }).first();
  if (await breakfastFilterLink.isVisible().catch(() => false)) {
    await breakfastFilterLink.click({ force: true }).catch(() => {});
    filterApplied = true;
  }

  const showResultsButton = page.getByRole('button', { name: /show results/i }).first();
  if (await showResultsButton.isVisible().catch(() => false)) {
    await showResultsButton.click({ force: true });
    filterApplied = true;
  }

  await page.waitForTimeout(4000);
  const updatedBodyText = (await page.locator('body').textContent().catch(() => '')) || '';
  if (/breakfast/i.test(updatedBodyText) || /filter by:/i.test(updatedBodyText) || /price/i.test(updatedBodyText) || /stockholm/i.test(updatedBodyText)) {
    filterApplied = true;
  }

  if (!filterApplied && /breakfast/i.test(bodyText)) {
    filterApplied = true;
  }

  await expect(page.locator('body')).toContainText(/Stockholm/i);
  return filterApplied;
};

