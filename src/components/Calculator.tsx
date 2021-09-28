import styles from "../styles/Calculator.module.scss";
import { Display } from "./Display";
import { Keypad } from "./Keypad";
import { useSelector } from "react-redux";

export const Calculator = (props: any) => {
  const expression = useSelector((state: any) => state.calculator.expression);
  const total = useSelector((state: any) => state.calculator.total);

  return (
    <div className={styles.container}>
      <Display expression={expression} total={total} />
      <Keypad expression={expression} />
    </div>
  );
};
