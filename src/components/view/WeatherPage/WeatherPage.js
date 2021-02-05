import { useState, useEffect } from 'react';
import Loader from '../../Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCitySearchWeather } from '../../service/home-api';
import s from '../WeatherPage//WeatherPage.module.css';
import CitySearchWeather from '../CitySearchWeather/CitySearchWeather';
import StatusError from '../../StatusError/StatusError';

export default function WeatherPage() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  console.log('city page', weather);

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');

    fetchCitySearchWeather(query)
      .then(newQuery => {
        setWeather(newQuery);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [query]);

  return (
    <div className={s.Searchbar}>
      <CitySearchWeather getCity={setQuery} />

      {status === 'pending' && <Loader />}

      {status === 'rejected' && (
        <StatusError message={error.message} style={{ textAlign: 'center' }} />
      )}

      {status === 'resolved' && (
        <section className={s.weather}>
          <h1>Weather in {weather.location.name} </h1>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.name}
          />
          <p>Cloud: {weather.current.condition.text}</p>
          <p>Temperature: {weather.current.temp_c} C</p>
          <p>Wind: {weather.current.wind_mph} m/s</p>
        </section>
      )}
    </div>
  );
}
