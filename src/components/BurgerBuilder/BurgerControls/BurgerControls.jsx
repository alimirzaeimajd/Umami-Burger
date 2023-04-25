import React from "react";
import styles from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl/BurgerControl";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];

const BurgerControls = (props) => (
  <div className={styles.BuildControls}>
    <p>
      {" "}
      <strong>purchasable:</strong>
    </p>
    <p>{props.totalprice.toFixed(2)}$</p>
    {controls.map((ctrl) => (
      <BurgerControl
        key={ctrl.label}
        label={ctrl.label}
        add={() => props.addIngredients(ctrl.type)}
        remove={() => props.removeIngredients(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={styles.OrderButton}>Order</button>
  </div>
);

export default BurgerControls;
