import { describe, expect, it } from "bun:test";
import { render } from "@testing-library/react";
import { Spinner } from "@/components/common";

describe("Spinner Component", () => {
	it("should render correctly", () => {
		const { container } = render(<Spinner />);
		const ring = container.querySelector(".ring");
		expect(ring).toBeTruthy();
		expect(ring?.children.length).toBe(4);
	});
});
