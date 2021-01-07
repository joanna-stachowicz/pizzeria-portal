import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_START = createActionName('UPDATE_START');
const UPDATE_SUCCESS = createActionName('UPDATE_SUCCESS');
const UPDATE_ERROR = createActionName('UPDATE_ERROR');


/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updateStarted = payload => ({ payload, type: UPDATE_START });
export const updateSuccess = payload => ({ payload, type: UPDATE_SUCCESS });
export const updateError = payload => ({ payload, type: UPDATE_ERROR });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());     // wysłanie do aplikacji info o rozpoczęciu pobierania danych

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {                          // .then oznacza, że .get się powiodło
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {                         // .catch - przechwycenie niepoprawnych sytuacji
        dispatch(fetchError(err.message || true));
      });
  };
};

export const updateAPI = (id, status) => {
  return (dispatch, getState) => {
    dispatch(updateStarted());

    Axios
      .put(`${api.url}/api/${api.tables}/${id}`, { status: status })
      .then(res => {
        dispatch(updateSuccess(res.data));
        dispatch(fetchFromAPI());
      })
      .catch(err => {
        dispatch(updateError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }

}
