import { describe, expect, it, vi } from "bun:test";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Button } from "@/components/common";

describe("Button Component", () => {
	it("should render children correctly", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText("Click me")).toBeTruthy();
	});

	it("should render as a button by default", () => {
		render(<Button>Button</Button>);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeTruthy();
		expect(buttonElement.getAttribute("type")).toBe("button");
	});

	it("should call onClick when clicked", () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me</Button>);
		const buttonElement = screen.getByText("Click me");
		fireEvent.click(buttonElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("should render as a link when 'to' prop is provided", () => {
		render(
			<MemoryRouter>
				<Button to="/home">Go home</Button>
			</MemoryRouter>,
		);
		const linkElement = screen.getByRole("link");
		expect(linkElement).toBeTruthy();
		expect(linkElement.getAttribute("href")).toBe("/home");
	});

	it("should apply custom className", () => {
		render(<Button className="custom-class">Styled</Button>);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement.classList.contains("custom-class")).toBe(true);
	});

	it("should have correct button type when provided", () => {
		render(<Button type="submit">Submit</Button>);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement.getAttribute("type")).toBe("submit");
	});
});
