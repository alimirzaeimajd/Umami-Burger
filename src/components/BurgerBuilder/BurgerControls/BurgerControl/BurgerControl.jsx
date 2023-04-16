import styles from "./BurgerControl.module.css";
import Button from "react-bootstrap/Button";
export default function BurgerControl({ remove, disabled, label, add }) {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{label}</div>
      <button className={styles.Less} onClick={remove} disabled={disabled}>
        Remove{" "}
      </button>
      <button className={styles.More} onClick={add}>
        Add{" "}
      </button>
    </div>
  );
}
