import React from "react";
import styles from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl/BurgerControl";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
    <p className={styles.h2}>{props.price.toFixed(2)}$</p>
    {controls.map((ctrl) => (
      <BurgerControl
        key={ctrl.label}
        label={ctrl.label}
        add={() => props.addIngredients(ctrl.type)}
        remove={() => props.removeIngredients(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={styles.OrderButton}>
      <Link to="/burger-builder/order-page">Order</Link>
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(BurgerControls);
