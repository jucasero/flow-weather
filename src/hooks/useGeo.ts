import { useEffect, useState } from 'react';

interface ICoordinates {
  latitude: number | null;
  longitude: number | null;
  error: boolean | null;
}

const useGeo = () => {
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    latitude: null,
    longitude: null,
    error: null
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }, [coordinates.error]);

  const showPosition = (position: any) => {
    setCoordinates({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      error: false
    });
  };
  const showError = (error: any) => {
    if (error.code)
      setCoordinates({
        latitude: null,
        longitude: null,
        error: true
      });
  };

  return coordinates;
};

export default useGeo;
