import { useCallback, useEffect, useState } from "react";

interface Geolocation {
	latitude: number | null;
	longitude: number | null;
	error: boolean | null;
}

export const useGeo = () => {
	const [geolocation, setGeolocation] = useState<Geolocation>({
		latitude: null,
		longitude: null,
		error: null,
	});

	const showPosition = useCallback((position: GeolocationPosition) => {
		setGeolocation({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			error: false,
		});
	}, []);

	const showError = useCallback((error: GeolocationPositionError) => {
		if (error.code)
			setGeolocation({
				latitude: null,
				longitude: null,
				error: true,
			});
	}, []);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError, {
				timeout: 10000,
			});
		} else {
			setGeolocation((prev) => ({ ...prev, error: true }));
		}
	}, [showError, showPosition]);

	return { geolocation };
};
