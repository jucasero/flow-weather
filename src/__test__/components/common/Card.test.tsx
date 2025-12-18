import { describe, expect, it } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Card } from "@/components/common/Card";

describe("Card Component", () => {
  it("should render correct day name based on date", () => {
    const date = "2023-10-27"; // Friday (Viernes)
    render(<Card date={date} />);
    expect(screen.getByText("Viernes")).toBeTruthy();
  });

  it("should render default values when props are missing", () => {
    render(<Card />);
    // Assuming RowCardDescription renders the value.
    // Since there are multiple rows with defaults, we expect multiple "-".
    const dashes = screen.getAllByText("-");
    expect(dashes.length).toBeGreaterThan(0);
  });

  it("should render provided weather data", () => {
    const props = {
      date: "2023-10-29", // Sunday (Domingo)
      minTempeture: "10°C",
      maxTempeture: "20°C",
      windSpeed: "15 km/h",
    };

    render(<Card {...props} />);

    expect(screen.getByText("Domingo")).toBeTruthy();
    expect(screen.getByText("10°C")).toBeTruthy();
    expect(screen.getByText("20°C")).toBeTruthy();
    expect(screen.getByText("15 km/h")).toBeTruthy();
  });
});
