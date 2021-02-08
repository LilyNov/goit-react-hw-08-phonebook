import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import s from '../WeatherPage//WeatherPage.module.css';
import CitySearchWeather from '../CitySearchWeather/CitySearchWeather';
import {
  getWeatherLocation,
  getWeatherCurrent,
} from '../../../redux/weather/weather-selectors';

export default function WeatherPage() {
  const weatherLocation = useSelector(getWeatherLocation);
  const weatherCurrent = useSelector(getWeatherCurrent);

  return (
    <div className={s.Searchbar}>
      <CitySearchWeather />

      {weatherLocation && weatherCurrent ? (
        <section className={s.weather}>
          <h2 className={s.title}>Weather in {weatherLocation?.name} </h2>
          <img
            className={s.img}
            src={weatherCurrent?.condition.icon}
            alt={weatherLocation?.name}
          />
          <p className={s.textCloud}>Cloud: {weatherCurrent?.condition.text}</p>
          <p className={s.temp}>{weatherCurrent?.temp_c}&deg;C</p>
          <p className={s.text}>Wind: {weatherCurrent?.wind_mph} m/s</p>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}
