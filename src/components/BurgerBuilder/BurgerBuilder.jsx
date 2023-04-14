import { useState } from "react";
import Burger from "./Burger";
import BurgerControls from "./BurgerControls";
import BootstrapNavbar from "../BootstrapNavbar";
export default function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    meat: 1,
    salad: 1,
    bacon: 1,
    cheese: 1,
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const [ingredientsPrices, setIngredientPrices] = useState({
    salad: 0.25,
    cheese: 0.5,
    meat: 5,
    bacon: 1,
  });

  const addIngredientsHandler = (type) => {
    setIngredients(ingredients[type] + 1);
    console.log(ingredients);
  };

  const removeIngredientsHandler = (type) => {
    setIngredients(ingredients[type] + 1);
    console.log(ingredients);
  };
  return (
    <>
      <BootstrapNavbar />
      <Burger ingredients={ingredients} />
      <BurgerControls
        addIngredients={addIngredientsHandler}
        removeIngredients={removeIngredientsHandler}
      />
    </>
  );
}
