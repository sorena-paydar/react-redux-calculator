import React from "react";
import styles from "../styles/Keypad.module.scss";
import { Button } from "./Button";
import Backspace from "./icons/Backspace";

export const Keypad = (props: { expression: any }) => {
  const isEqual = () => {
    if (props.expression.includes("=")) {
      return true;
    }
    return false;
  };

  const handleExpression = () => {
    if (props.expression.length < 31) {
      return false;
    }
    return true;
  };

  return (
    <div className={styles.keypad}>
      <Button button={"C"} value={"C"} />
      <Button button={"√"} value={"√"} disabled={handleExpression()} />
      <Button button={"%"} value={"%"} disabled={handleExpression()} />
      <Button button={"/"} value={"÷"} />
      <Button button={"7"} value={"7"} />
      <Button button={"8"} value={"8"} />
      <Button button={"9"} value={"9"} />
      <Button button={"*"} value={"×"} />
      <Button button={"4"} value={"4"} />
      <Button button={"5"} value={"5"} />
      <Button button={"6"} value={"6"} />
      <Button button={"-"} value={"−"} />
      <Button button={"1"} value={"1"} />
      <Button button={"2"} value={"2"} />
      <Button button={"3"} value={"3"} />
      <Button button={"+"} value={"+"} />
      <Button button={"0"} value={"0"} />
      <Button button={"."} value={"."} />
      <Button button={"Del"} value={<Backspace />} />
      <Button button={"="} value={"="} disabled={isEqual()} />
    </div>
  );
};
