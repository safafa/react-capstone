import axios from 'axios';

const GET_CONTRIES = 'covide/redux/GET_CONTRIES';

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

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONTRIES:
      return { ...action.result };
    default:
      return state;
  }
};

export default reducer;
