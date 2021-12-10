import './style.css';

interface ICardProps {
  date: number | string;
  dayWeatherDescripton: string;
  icon: string;
  tempeture: number;
  feelsLike: number;
  humidity: number;
  clouds?: number;
  rainPosibility?: number;
  pressure: number;
  windSpeed: number;
  uvi: number;
  dewPoint: number;
  visibility: number;
  sunrise: number;
  sunset: number;
}

export const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const {
    date,
    dayWeatherDescripton,
    icon,
    tempeture,
    feelsLike,
    humidity,
    clouds,
    rainPosibility,
    pressure,
    windSpeed,
    uvi,
    dewPoint,
    visibility,
    sunrise,
    sunset
  } = props;

  const setCardTitle = () => {
    let newDate = date;
    if (typeof date === 'number') {
      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'domingo'];
      const millisecondsDate = new Date(Number(newDate) * 1000);
      newDate = days[millisecondsDate.getDay()];
    }
    return newDate + ' - ' + dayWeatherDescripton;
  };

  const formatValues = (value: number, type?: string) => {
    switch (type) {
      case 'temperature':
        return Math.round(value) + ' °c';
      case 'percentage':
        return Math.round(value) + ' %';
      case 'pressure':
        return Math.round(value) + ' hPa';
      case 'speed':
        return Math.round(value) + ' m/s';
      case 'distance':
        return Math.round(value) + ' m';
      case 'time':
        return new Date(value * 1000).toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit'
        });
      default:
        return String(Math.round(value));
    }
  };

  const renderRowCardDescription = (
    firstSubtitle: string,
    firstDescription: string,
    secondSubtitle: string,
    secodDescription: string
  ) => (
    <div className='card__row'>
      <div className='card__col'>
        <h4 className='card__col__item'>{firstSubtitle}</h4>
        <p className='card__col__item'>{firstDescription}</p>
      </div>
      <div className='card__col'>
        <h4 className='card__col__item'>{secondSubtitle}</h4>
        <p className='card__col__item'>{secodDescription}</p>
      </div>
    </div>
  );

  return (
    <div className='card'>
      <div className='card__row'>
        <h2>{setCardTitle()}</h2>
      </div>
      <div className='card__row'>
        <img
          className='car__row__image'
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='imagen del clima'
        />
        <h1>{formatValues(tempeture, 'temperature')}</h1>
      </div>
      {renderRowCardDescription(
        'Sensacion real',
        formatValues(feelsLike, 'temperature'),
        'Humedad',
        formatValues(humidity, 'percentage')
      )}
      {clouds !== undefined
        ? renderRowCardDescription(
            'Nubosidad',
            formatValues(clouds, 'percentage'),
            'Presion',
            formatValues(pressure, 'pressure')
          )
        : renderRowCardDescription(
            'Probabilidad de lluvia',
            formatValues(rainPosibility! * 100, 'percentage'),
            'Presion',
            formatValues(pressure, 'pressure')
          )}
      {renderRowCardDescription(
        'Velocidad del viento',
        formatValues(windSpeed, 'speed'),
        'Índice UV',
        formatValues(uvi)
      )}
      {renderRowCardDescription(
        'Punto de rocío',
        formatValues(dewPoint, 'temperature'),
        'Visibilidad',
        formatValues(visibility, 'distance')
      )}
      {renderRowCardDescription('Amanecer', formatValues(sunrise, 'time'), 'Atardecer', formatValues(sunset, 'time'))}
    </div>
  );
};
