import styles from "./BurgerControl.module.css";
import Button from "react-bootstrap/Button";
const BurgerControl = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <Button onClick={props.remove} disabled={props.disabled} variant="danger">
      Remove{" "}
    </Button>{" "}
    <Button onClick={props.add} variant="success">
      Add{" "}
    </Button>{" "}
  </div>
);

export default BurgerControl;
