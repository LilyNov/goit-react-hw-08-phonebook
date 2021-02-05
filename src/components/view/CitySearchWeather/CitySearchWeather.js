import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import s from './CitySearchWeather.module.css';

export default function CitySearchWeather({ getCity }) {
  const [city, setCity] = useState('');

  console.log(city);

  //получение значения input
  const handleNameChange = e => {
    setCity(e.currentTarget.value.toLowerCase());
  };

  //отправка значения из формы
  const handleSubmit = e => {
    e.preventDefault();

    if (city.trim() === '') {
      toast.warn('Fill out the form');
      return;
    }

    getCity(city);
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
