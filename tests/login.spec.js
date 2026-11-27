
const { test, expect } = require('@playwright/test');

// TC01: Login page should open
test('TC01 - Login page opens successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();
});

// TC02: Valid user login
test('TC02 - Valid user can login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
});

// TC03: Invalid login
test('TC03 - Invalid login displays error', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
});

// TC04: Locked-out user
test('TC04 - Locked out user cannot login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
});

// TC05: Inventory displays six products
test('TC05 - Inventory page displays six products', async ({ page }) =>    {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('.inventory_item')).toHaveCount(6);
});

// TC06: Sort products by price low to high
test('TC06 - Products can be sorted by price low to high', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.locator('.product_sort_container').selectOption('lohi');

    const prices = await page.locator('.inventory_item_price').allTextContents();

    const numbers = prices.map(price => Number(price.replace('$', '')));

    expect(numbers).toEqual([...numbers].sort((a, b) => a - b));
});

// TC07: Add product to cart
test('TC07 - Adding product updates cart badge', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

// TC08: Complete checkout
test('TC08 - User can complete checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();

    await page.locator('[data-test="checkout"]').click();

    await page.fill('[data-test="firstName"]', 'Megha');
    await page.fill('[data-test="lastName"]', 'Patel');
    await page.fill('[data-test="postalCode"]', '400001');

    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
