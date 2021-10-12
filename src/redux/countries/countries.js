import axios from 'axios';

const GET_CONTRIES = 'covide/redux/GET_CONTRIES';
const GET_DETAILS = 'covide/redux/GET_DETAILS';

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
    dispatch({ type: GET_CONTRIES, result });
  });
};

export const getCountry = (name) => async (dispatch) => {
  axios.get(`https://api.covid19tracking.narrativa.com/api/${today}/country/${name}`).then((response) => {
    const { dates } = response.data;
    const { countries } = dates[`${today}`];
    const { regions: entries } = countries[`${name}`];
    const regions = Object.values(entries);
    dispatch({ type: GET_DETAILS, regions });
  });
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONTRIES:
      return { ...action.result };
    case GET_DETAILS:
      return { ...state, ...action.regions };
    default:
      return state;
  }
};

export default reducer;
