import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import s from './CitySearchWeather.module.css';
import { searchWeather } from '../../../redux/weather/weather-operations';
import { useDispatch } from 'react-redux';

export default function CitySearchWeather() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  //получение значения input
  const handleNameChange = e => {
    setCity(e.currentTarget.value.toLowerCase());
  };

  //отправка значения из формы
  const handleSubmit = e => {
    e.preventDefault();

    if (city.trim() === '') {
      alert('Fill out the form');

      return;
    } else {
      dispatch(searchWeather({ city }));
    }

    setCity('');
  };

  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <div className={s.search}>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Input the city..."
            value={city}
            onChange={handleNameChange}
          />
          <button type="submit" className={s.SearchFormButton}>
            <ImSearch style={{ marginRight: 8 }} />
          </button>
        </div>
      </form>
    </div>
  );
}
