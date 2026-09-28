import { test, expect } from '@playwright/test';

test('TC - Popular City → Search Results → Property Details', async ({ page }) => {

  // 1. Open Homepage
  await page.goto('https://roomforrent.rent/');

  // 2. Verify Popular Cities section
  await expect(
    page.getByText('Popular cities', { exact: true })
  ).toBeVisible();

  // 3. Select London from Popular Cities
  const londonCity = page.locator(
    'a[href*="/my-spare-rooms-uk/search/new"][href*="address=London"]'
  ).first();

  await expect(londonCity).toBeVisible();

  // 4. Get the London Search URL
  const searchUrl = await londonCity.getAttribute('href');

  expect(searchUrl).toBeTruthy();

  console.log('London Search URL:', searchUrl);

  // 5. Navigate to Search Results
  await page.goto(searchUrl!);

  // 6. Verify Search Results page
  await expect(page).toHaveURL(
    /my-spare-rooms-uk\/search\/new/
  );

  console.log('Search Results URL:', page.url());

  // 7. Verify View Details is displayed
 // 7. Verify View Details is displayed
const viewDetails = page.getByRole('link', {
  name: 'View Details'
}).first();

await expect(viewDetails).toBeVisible();

// 8. Scroll to View Details and click
await viewDetails.scrollIntoViewIfNeeded();
await expect(viewDetails).toBeVisible();
await viewDetails.click({ force: true });

// 9. Wait for Property Details page
await page.waitForURL(/property\/detail/i, {
  timeout: 10000
});

// 10. Verify Property Details URL
await expect(page).toHaveURL(/property\/detail/i);

// 11. Verify Property Details page loaded
await expect(page.locator('body')).toBeVisible();

console.log('Property Details URL:', page.url());
  const messageBox = page.getByRole('textbox', {
  name: 'Type your message...'
});

await expect(messageBox).toBeVisible();

await messageBox.fill('Hello, I am interested in this property. Please share more details.');

const sendButton = page.getByRole('button', {
  name: 'icon Send secure message'
});

await expect(sendButton).toBeVisible();
await sendButton.click();
// 3. Wait for the new page/form
await page.waitForLoadState('domcontentloaded');

// 4. Fill details on the NEW page
await page.getByRole('textbox', {
  name: 'Full name'
}).fill('Aman Kaur');

await page.getByRole('textbox', {
  name: 'Email',
  exact: true
}).fill('test211@yopmail.com');

// 5. Select India
const countryDropdown = page.getByRole('combobox', {
  name: 'Selected country'
}).first();

await expect(countryDropdown).toBeVisible();
 
await expect(countryDropdown).toBeVisible();

await countryDropdown.click();

const countrySearch = page.getByRole('combobox', {
  name: 'Search'
});

await expect(countrySearch).toBeVisible();

await countrySearch.fill('India');

const indiaOption = page.getByRole('option', {
  name: 'India +'
});

await expect(indiaOption).toBeVisible();

await indiaOption.click();
await page.getByRole('textbox', {
  name: 'Mobile number Please enter a'
}).fill('8288860576');

// Open WhatsApp country selector
const whatsappCountry = page.getByRole('combobox', {
  name: 'Selected country',
  description: 'United Kingdom'
});

await expect(whatsappCountry).toBeVisible();

await whatsappCountry.click();

// Search India
const whatsappCountrySearch = page.getByRole('combobox', {
  name: 'Search'
});

await expect(whatsappCountrySearch).toBeVisible();

await whatsappCountrySearch.fill('India');

// Select India
const whatsappIndiaOption = page.getByRole('option', {
  name: 'India +'
});

await expect(whatsappIndiaOption).toBeVisible();

await whatsappIndiaOption.click();

// Enter same WhatsApp number
await page.getByRole('textbox', {
  name: 'WhatsApp for landlord contact'
}).fill('8288860576');
 
await page.getByRole('textbox', {
  name: 'Brief summary for the'
}).fill('I am interested in this property and would like to know more details.');

const verifyButton = page.getByRole('button', {
  name: 'Verify'
});

await expect(verifyButton).toBeVisible();

await verifyButton.click();
// Wait for validation/verification message to appear
await page.waitForTimeout(3000);
await page.pause();
})