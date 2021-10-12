import axios from 'axios';

const GET_COUNTRIES = 'covide/redux/GET_COUNTRIES';
const GET_DETAILS = 'covide/redux/GET_DETAILS';
const FILTER_COUNTRIES = 'covide/redux/FILTER_COUNTRIES';

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = `${yyyy}-${mm}-${dd}`;

export const getContries = () => async (dispatch) => {
  axios.get(`https://api.covid19tracking.narrativa.com/api/${today}`).then((response) => {
    const { dates, total } = response.data;
    const { countries: entries } = dates[`${today}`];
    const { today_confirmed: todayConfirmed } = total;
    const countries = Object.values(entries);
    const result = { countries, todayConfirmed };
    dispatch({ type: GET_COUNTRIES, result });
  });
};

export const getCountry = (id) => async (dispatch) => {
  axios.get(`https://api.covid19tracking.narrativa.com/api/${today}/country/${id}`).then((response) => {
    const { dates } = response.data;
    const { countries } = dates[`${today}`];
    const country = countries[Object.keys(countries)[0]];
    dispatch({ type: GET_DETAILS, country });
  });
};

export const filterCountries = (letter) => async (dispatch) => {
  axios.get(`https://api.covid19tracking.narrativa.com/api/${today}`).then((response) => {
    const { dates, total } = response.data;
    console.log(letter);
    const { countries: entries } = dates[`${today}`];
    const { today_confirmed: todayConfirmed } = total;
    const countries = Object.values(entries);
    const filtered = countries.filter((country) => country.name.charAt(0).includes(letter));
    const result = { countries: filtered, todayConfirmed };
    dispatch({ type: FILTER_COUNTRIES, result });
  });
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...action.result };
    case GET_DETAILS:
      return { ...action.country };
    case FILTER_COUNTRIES:
      return { ...action.result };
    default:
      return state;
  }
};

export default reducer;
