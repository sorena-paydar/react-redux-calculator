import React, { useState } from "react";
import styles from "../styles/Button.module.scss";
import cn from "classnames";
import { useDispatch } from "react-redux";
import * as fromCalculator from "../store";
import { connect } from "react-redux";
import { calculate } from "../actions/actions";
import {
  deleteLastEntry,
  clear,
  evaluateExpression,
  squareRoot,
  percentage,
} from "../actions/actions";

export const Button = (props: {
  button: string | React.ReactNode;
  value: any;
  disabled?: boolean;
}) => {
  const isEqualSign = (): boolean => {
    if (props.button === "=") {
      return true;
    }
    return false;
  };

  const isNan = (): boolean => {
    if (
      Number(props.button) ||
      props.button === "0" ||
      props.button === "." ||
      props.button === "C" ||
      props.button === "√" ||
      props.button === "%" ||
      props.button === "="
    ) {
      return true;
    }
    return false;
  };

  const dispatch = useDispatch();
  const handleClick = (key: any) => {
    switch (key) {
      case "C":
        mapDispatchToProps(dispatch).clear();
        break;
      case "Del":
        mapDispatchToProps(dispatch).delete();
        break;
      case "=":
        mapDispatchToProps(dispatch).evaluate();
        break;
      case "√":
        mapDispatchToProps(dispatch).squareRoot();
        break;
      case "%":
        mapDispatchToProps(dispatch).percentage();
        break;
      default:
        mapDispatchToProps(dispatch).calculate(key);
        break;
    }
  };

  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.isEqualSign]: isEqualSign(),
        [styles.isNan]: !isNan(),
      })}
      onClick={() => handleClick(props.button)}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  );
};

const mapStateToProps = (state: any) => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    calculate: (buttonKey: any) => {
      dispatch(calculate(buttonKey));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    },
    squareRoot: () => {
      dispatch(squareRoot());
    },
    percentage: () => {
      dispatch(percentage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
