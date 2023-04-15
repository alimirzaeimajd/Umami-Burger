import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p className="text-danger prevent-select">Please add something!</p>
    );
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
