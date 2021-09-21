import styles from "../styles/Calculator.module.scss";
import { Display } from "./Display";
import { Keypad } from "./Keypad";

export const Calculator = () => {
  return (
    <div className={styles.container}>
      <Display />
      <Keypad />
    </div>
  );
};
