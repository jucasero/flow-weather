import { expect, test } from "@playwright/test";

test("should show not found page for invalid route", async ({ page }) => {
	await page.goto("http://localhost:3000/invalid-route-that-does-not-exist");

	await expect(page.getByText("404")).toBeVisible();
	await expect(page.getByText("¡Ups! Página no encontrada")).toBeVisible();
});

test("should navigate back to home from not found page", async ({ page }) => {
	await page.goto("http://localhost:3000/some-random-route");

	const backButton = page.getByRole("link", { name: "Volver al inicio" });
	await expect(backButton).toBeVisible();

	await backButton.click();

	await expect(page).toHaveURL(/.*home/);
	await expect(
		page.getByRole("heading", { name: "Flow Weather" }),
	).toBeVisible();
});
