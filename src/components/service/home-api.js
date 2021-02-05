const KEY = '3640d3f7d3b3473eb15101105210502';
const BASE_URL = `http://api.weatherapi.com/v1`;

export function fetchCitySearchWeather(query) {
  return fetch(`${BASE_URL}/current.json?key=${KEY}&q=${query}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Error'));
    },
  );
}
