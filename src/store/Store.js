import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//combina reducers de varias funcionalidades que necesites
const reducers = combineReducers({
  auth: authReducer,
});
// solo recibe un solo reducer
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
