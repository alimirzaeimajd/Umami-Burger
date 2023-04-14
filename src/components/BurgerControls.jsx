import styles from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl";
function BurgerControls({ totalprice, addIngredients, removeIngredients }) {
  const controls = [
    { label: "Meat", type: "meat" },
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
  ];
  return (
    <div className={styles.BuildControls}>
      <p className={styles.textLighth3}>
        {" "}
        <strong>purchasable:</strong>
      </p>
      {/* .toFixed(2) */}
      <p>{totalprice}$</p>
      {controls.map((ctrl) => (
        <BurgerControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => addIngredients(ctrl.type)}
          remove={() => removeIngredients(ctrl.type)}
        />
      ))}
      <button className={styles.OrderButton}>Order</button>
    </div>
  );
}

export default BurgerControls;
