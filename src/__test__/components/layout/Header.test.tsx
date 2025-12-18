import { describe, expect, it } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/layout";

describe("Header Component", () => {
	it("should render title correctly", () => {
		const title = "My App Header";
		render(<Header title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
