import * as types from "./actionTypes";

export const calculate = (key: any) => {
  return {
    type: types.SET_EXPRESSION,
    payload: key,
  };
};

export const clear = () => {
  return {
    type: types.CLEAR_EXPRESSION,
  };
};

export const deleteLastEntry = () => {
  return {
    type: types.DELETE_LAST_EXPRESSION_ENTRY,
  };
};

export const evaluateExpression = () => {
  return {
    type: types.EVALUATE_EXPRESSION,
  };
};

export const squareRoot = () => {
  return {
    type: types.SQUARE_ROOT,
  };
};

export const percentage = () => {
  return {
    type: types.PERCENTAGE,
  };
};
