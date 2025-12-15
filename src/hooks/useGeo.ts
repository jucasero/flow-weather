import { useCallback, useEffect, useState } from "react";

interface Coordinates {
	latitude: number | null;
	longitude: number | null;
	error: boolean | null;
}

const useGeo = () => {
	const [coordinates, setCoordinates] = useState<Coordinates>({
		latitude: null,
		longitude: null,
		error: null,
	});

	const showPosition = useCallback((position: GeolocationPosition) => {
		setCoordinates({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			error: false,
		});
	}, []);

	const showError = useCallback((error: GeolocationPositionError) => {
		if (error.code)
			setCoordinates({
				latitude: null,
				longitude: null,
				error: true,
			});
	}, []);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	}, [showError, showPosition]);
	return coordinates;
};

export default useGeo;
