import axios from 'axios';

const GET_CONTRIES = 'covide/redux/GET_CONTRIES';

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = `${yyyy}-${mm}-${dd}`;

export const getContries = () => async (dispatch) => {
  axios.get(`https://api.covid19tracking.narrativa.com/api/${today}`).then((response) => {
    const { dates } = response.data;
    const { countries } = dates[`${today}`];
    dispatch({ type: GET_CONTRIES, countries });
  });
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONTRIES:
      return { ...action.countries };
    default:
      return state;
  }
};

export default reducer;
