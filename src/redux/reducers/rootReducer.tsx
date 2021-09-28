import * as types from "../actions/actionTypes";
import Calculate from "../../utils/Calculate";

const initialState = {
  expression: "",
  total: 0,
};

interface Action {
  type: string;
  payload: string;
}

function setExpression(state = initialState, action: Action) {
  if (
    /[\d]*[-+%*/.]$/.exec(state.expression) &&
    /[-+%*/.]/.exec(action.payload)
  ) {
    state.expression = state.expression.slice(0, state.expression.length - 1);
  }

  switch (action.type) {
    case types.SET_EXPRESSION:
      if (["+", "/", "*", "%"].includes(action.payload) && !state.expression) {
        return `${state.total}${action.payload}`;
      }
      return `${!state.expression && state.total ? state.total : ""}${
        state.expression + action.payload
      }`;
    default:
      return state.expression;
  }
}

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.SET_EXPRESSION:
      let expression = setExpression(state, action);

      return {
        ...state,
        expression,
        total: Calculate(expression) || state.total,
      };
    case types.CLEAR_EXPRESSION:
      return {
        ...state,
        expression: "",
        total: 0,
      };
    case types.DELETE_LAST_EXPRESSION_ENTRY:
      let exp = state.expression;
      exp = exp
        .split("")
        .slice(0, exp.length - 1)
        .join("");
      return {
        ...state,
        expression: exp,
        total: Calculate(exp),
      };
    case types.EVALUATE_EXPRESSION:
      return {
        ...state,
        expression: state.expression + " = ",
        total: state.total,
      };
    case types.SQUARE_ROOT:
      return {
        ...state,
        expression: "√" + "(" + state.expression + ")",
        total: Math.pow(Number(state.expression) || state.total, 1 / 2),
      };
    case types.PERCENTAGE:
      return {
        ...state,
        expression: "(" + state.expression + "%" + ")",
        total: (Number(state.expression) || state.total) / 100,
      };
    default:
      return state;
  }
}
