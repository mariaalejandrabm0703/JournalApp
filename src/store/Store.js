import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
//combina reducers de varias funcionalidades que necesites
const reducers = combineReducers({
  auth: authReducer,
});
// solo recibe un solo reducer
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
