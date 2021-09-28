import { createStore, compose, combineReducers } from "redux";
import calculateReducer from "../reducers/rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  calculator: calculateReducer,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export const getExpression = (state: any) => {
  return state.calculator.expression;
};

export const getTotal = (state: any) => {
  return state.calculator.total;
};
