import styles from "./BurgerControl.module.css";
import Button from "react-bootstrap/Button";
const BurgerControl = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <Button variant="danger">Remove </Button>{" "}
    <Button variant="success">Add </Button>{" "}
  </div>
);

export default BurgerControl;
