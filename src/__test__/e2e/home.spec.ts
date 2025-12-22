import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
	test.beforeEach(async ({ page, context }) => {
		// Mock geolocation for all browsers to avoid hanging in headless environments
		await context.grantPermissions(["geolocation"]);
		await context.setGeolocation({ latitude: 4.6018, longitude: -74.0716 }); // Bogotá coords

		// Navigate to home page
		await page.goto("http://localhost:3000/home");
	});

	test("should display the main elements", async ({ page }) => {
		// Check header
		await expect(
			page.getByRole("heading", { name: "Flow Weather" }),
		).toBeVisible();

		// Check city selector
		await expect(page.getByRole("combobox")).toBeVisible();

		// Check footer links
		await expect(
			page.getByRole("link", { name: "@jucasero" }).first(),
		).toBeVisible();
	});

	test("should load weather data and display cards", async ({ page }) => {
		// Wait for the loader to disappear (if any) or cards to appear
		// By default it might be loading, so we wait for cards
		const grid = page.locator('div[class*="grid"]');
		await expect(grid).toBeVisible();

		// Check if at least one card is visible
		// Since we don't have specific data-testids, we can look for temperature units or date patterns
		// Weather cards usually contain '°C' (or the unit from the mock/API)
		await expect(page.locator("text=°C").first()).toBeVisible({
			timeout: 10000,
		});
	});

	test("should allow changing the city", async ({ page }) => {
		const selector = page.getByRole("combobox");

		// Get current value or text to compare later
		const initialText = await page.locator('div[class*="grid"]').innerText();

		// Change to "New York"
		// The value in the Select component is JSON.stringify({lat, lon})
		const nyValue = JSON.stringify({ lat: 40.712776, lon: -74.005974 });
		await selector.selectOption({ value: nyValue });

		// Wait for data to reload (spinner might appear)
		// We expect the text to change eventually
		await expect(async () => {
			const newText = await page.locator('div[class*="grid"]').innerText();
			expect(newText).not.toBe(initialText);
		}).toPass();
	});

	test("footer links should be correct", async ({ page }) => {
		const githubLink = page.getByRole("link", { name: "@jucasero" }).first();
		await expect(githubLink).toHaveAttribute(
			"href",
			"https://github.com/jucasero",
		);

		const linkedinLink = page.getByRole("link", { name: "@jucasero" }).last();
		await expect(linkedinLink).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/jucasero",
		);
	});
});
