import { beforeEach, describe, expect, it } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Login } from "@/views/Login";

beforeEach(() => {
	// Clear the DOM before each test to avoid interference
	document.body.innerHTML = "";
	cleanup();
});

describe("Login View", () => {
	it("should render message and button text", () => {
		const props = {
			message: "Bienvenido",
			buttonText: "Entrar",
		};

		render(
			<MemoryRouter>
				<Login {...props} />
			</MemoryRouter>,
		);

		expect(screen.getByText("Bienvenido")).toBeTruthy();
		expect(screen.getByText("Entrar")).toBeTruthy();
	});

	it("should have a link to /home", () => {
		const props = {
			message: "Bienvenido",
			buttonText: "Entrar",
		};

		render(
			<MemoryRouter>
				<Login {...props} />
			</MemoryRouter>,
		);

		const link = screen.getByRole("link");
		expect(link.getAttribute("href")).toBe("/home");
	});
});
