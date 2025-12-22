import { expect, test } from "@playwright/test";

test("has login message", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	const heading = page.getByRole("heading", {
		name: "Bienvenido a Flow Weather",
	});
	await expect(heading).toBeVisible();
});

test("can login and navigate to home", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	await page.getByRole("link", { name: "Ingresar" }).click();

	await expect(page).toHaveURL(/.*home/);
	const header = page.getByRole("heading", { name: "Flow Weather" });
	await expect(header).toBeVisible();
});
