import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//combina reducers de varias funcionalidades que necesites
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
});
// solo recibe un solo reducer
// adiciona los middleware
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
