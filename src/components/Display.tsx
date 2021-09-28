import { useState } from "react";
import styles from "../styles/Display.module.scss";

export const Display = (props: { expression: any; total: any }) => {
  return (
    <>
      <div className={styles.expression}>{props.expression}</div>
      <div className={styles.total}>{props.total}</div>
      <div className={styles.bottomCurve}></div>
    </>
  );
};
