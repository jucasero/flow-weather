import { describe, expect, it } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Message } from "@/components/common";

describe("Message Component", () => {
	it("should render title and description correctly", () => {
		const title = "Test Title";
		const description = "Test Description";

		render(<Message title={title} description={description} />);

		expect(screen.getByText(title)).toBeTruthy();
		expect(screen.getByText(description)).toBeTruthy();
	});
});
