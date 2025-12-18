import { beforeEach, describe, expect, it } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { NotFound } from "@/views/NotFound";

beforeEach(() => {
	// Clear the DOM before each test to avoid interference
	document.body.innerHTML = "";
	cleanup();
});

describe("NotFound View", () => {
	it("should render 404 message and return button", () => {
		render(
			<MemoryRouter>
				<NotFound />
			</MemoryRouter>,
		);

		expect(screen.getByText("404")).toBeTruthy();
		expect(screen.getByText("¡Ups! Página no encontrada")).toBeTruthy();
		expect(screen.getByText("Volver al inicio")).toBeTruthy();
	});

	it("should have a link to /home", () => {
		render(
			<MemoryRouter>
				<NotFound />
			</MemoryRouter>,
		);

		const link = screen.getByRole("link");
		expect(link.getAttribute("href")).toBe("/home");
	});
});
