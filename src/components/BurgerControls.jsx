import styles from "./BurgerControls.module.css";

function BurgerControls({}) {
  const controls = [
    { label: "Meat", type: "meat" },
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
  ];
  return (
    <div>
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
      <button
        className={styles.OrderButton}
        disabled={!props.purchasable}
        onClick={props.orderOn}
      >
        Order
      </button>
    </div>
  );
}

export default BurgerControls;
