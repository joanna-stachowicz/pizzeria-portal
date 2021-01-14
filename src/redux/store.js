import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import tablesReducer from './tablesRedux';

// define initial state and shallow-merge initial data
const initialState = {
  tables: {
    data: [],         // tablica stolików pobrana z API
    loading: {        // informacje o wczytywaniu danych
      active: false,  // inf. czy trwa wczytywanie
      error: false,   // ew. komunikat o błędzie
    },
  },
};

// define reducers
const reducers = {
  tables: tablesReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
