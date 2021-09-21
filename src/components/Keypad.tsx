import React from "react";
import styles from "../styles/Keypad.module.scss";
import { Button } from "./Button";
import Backspace from "./icons/Backspace";

export const Keypad: React.FC = () => {
  return (
    <div className={styles.keypad}>
      <Button button="C" />
      <Button button="√" />
      <Button button="%" />
      <Button button="÷" />
      <Button button={7} />
      <Button button={8} />
      <Button button={9} />
      <Button button="×" />
      <Button button={4} />
      <Button button={5} />
      <Button button={6} />
      <Button button="−" />
      <Button button={1} />
      <Button button={2} />
      <Button button={3} />
      <Button button="+" />
      <Button button={0} />
      <Button button="․" />
      <Button button={<Backspace />} />
      <Button button="=" />
    </div>
  );
};
