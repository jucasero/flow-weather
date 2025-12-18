import { beforeEach, describe, expect, it, vi } from "bun:test";
import { fireEvent, render, screen } from "@testing-library/react";
import { Select } from "@/components/common";
import type { City } from "@/models";

beforeEach(() => {
	// Clear the DOM before each test to avoid interference
	document.body.innerHTML = "";
});

describe("Select Component", () => {
	const mockData: City[] = [
		{ description: "City 1", value: { lat: 10, lon: 10 } },
		{ description: "City 2", value: { lat: 20, lon: 20 } },
	];
	const mockHandleChange = vi.fn();

	it("should render options based on data provided", () => {
		render(
			<Select
				data={mockData}
				value={JSON.stringify(mockData[0]?.value)}
				handleChange={mockHandleChange}
			/>,
		);

		const options = screen.getAllByRole("option");
		expect(options).toHaveLength(mockData.length);
		expect(options[0]?.textContent).toBe("City 1");
		expect(options[1]?.textContent).toBe("City 2");
	});

	it("should call handleChange when selection changes", () => {
		render(
			<Select
				data={mockData}
				value={JSON.stringify(mockData[0]?.value)}
				handleChange={mockHandleChange}
			/>,
		);

		const selectElement = screen.getByRole("combobox");
		fireEvent.change(selectElement, {
			target: { value: JSON.stringify(mockData[1]?.value) },
		});

		expect(mockHandleChange).toHaveBeenCalledTimes(1);
	});

	it("should show correct initial value", () => {
		render(
			<Select
				data={mockData}
				value={JSON.stringify(mockData[1]?.value)}
				handleChange={mockHandleChange}
			/>,
		);
		const selectElement = screen.getByRole("combobox") as HTMLSelectElement;
		expect(selectElement.value).toBe(JSON.stringify(mockData[1]?.value));
	});
});
