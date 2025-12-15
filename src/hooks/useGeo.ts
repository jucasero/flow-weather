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
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	}, [showError, showPosition]);

	return { geolocation };
};
