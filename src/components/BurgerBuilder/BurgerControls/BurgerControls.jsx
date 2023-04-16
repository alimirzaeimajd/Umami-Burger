import styles from "./BurgerControls.module.css";
export default function BurgerControls({ totalprice, addMeat, removeMeat }) {
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
      <div>
        <div>Meat</div>
        <button onClick={removeMeat}>Remove </button>
        <button onClick={addMeat}>Add </button>
      </div>

      {/* <div>
        <div>Salad</div>
        <button onClick={removeSalad}>Remove </button>
        <button onClick={addSalad}>Add </button>
      </div>
      <div>
        <div>Cheese</div>
        <button onClick={removeCheese}>Remove </button>
        <button onClick={addMeat}>Add </button>
      </div>
      <div>
        <div>Bacon</div>
        <button onClick={removeBacon}>Remove </button>
        <button onClick={addBacon}>Add </button>
      </div>
      <button className={styles.OrderButton}>Order</button>
    </div> */}
    </div>
  );
}
