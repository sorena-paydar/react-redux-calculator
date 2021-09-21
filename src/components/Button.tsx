import React from "react";
import styles from "../styles/Button.module.scss";
import cn from "classnames";

export const Button = (props: {
  button: string | number | React.ReactNode;
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
      props.button === 0 ||
      props.button === "․" ||
      props.button === "C" ||
      props.button === "√" ||
      props.button === "%" ||
      props.button === "="
    ) {
      return true;
    }
    return false;
  };

  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.isEqualSign]: isEqualSign(),
        [styles.isNan]: !isNan(),
      })}
      onClick={() => {
        console.log(props.button);
      }}
    >
      {props.button}
    </button>
  );
};
