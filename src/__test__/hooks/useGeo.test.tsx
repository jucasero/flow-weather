import { afterEach, describe, expect, it, vi } from "bun:test";
import { renderHook, waitFor } from "@testing-library/react";
import { useGeo } from "@/hooks/useGeo";

describe("useGeo Hook", () => {
	const mockGeolocation = {
		getCurrentPosition: vi.fn(),
		watchPosition: vi.fn(),
		clearWatch: vi.fn(),
	};

	Object.defineProperty(global.navigator, "geolocation", {
		value: mockGeolocation,
		writable: true,
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should initialize with null values", () => {
		const { result } = renderHook(() => useGeo());
		expect(result.current.geolocation).toEqual({
			latitude: null,
			longitude: null,
			error: null,
		});
	});

	it("should update state on successful geolocation", async () => {
		mockGeolocation.getCurrentPosition.mockImplementation((success) => {
			success({
				coords: {
					latitude: 40.7128,
					longitude: -74.006,
					accuracy: 10,
					altitude: null,
					altitudeAccuracy: null,
					heading: null,
					speed: null,
				},
				timestamp: Date.now(),
			});
		});

		const { result } = renderHook(() => useGeo());

		await waitFor(() => {
			expect(result.current.geolocation).toEqual({
				latitude: 40.7128,
				longitude: -74.006,
				error: false,
			});
		});
	});

	it("should update state on geolocation error", async () => {
		mockGeolocation.getCurrentPosition.mockImplementation((_, error) => {
			error({
				code: 1,
				message: "User denied Geolocation",
				PERMISSION_DENIED: 1,
				POSITION_UNAVAILABLE: 2,
				TIMEOUT: 3,
			} as GeolocationPositionError);
		});

		const { result } = renderHook(() => useGeo());

		await waitFor(() => {
			expect(result.current.geolocation).toEqual({
				latitude: null,
				longitude: null,
				error: true,
			});
		});
	});
});
