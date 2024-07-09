import { applyMiddleware, compose, legacy_createStore } from "redux";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
