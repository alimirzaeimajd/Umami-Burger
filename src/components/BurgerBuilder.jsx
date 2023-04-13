import { useState } from "react";
import Burger from "./Burger";
function BurgerBuilder() {
  const [ingredient] = useState({
    meat: 1,
    salad: 1,
    bacon: 1,
    cheese: 1,
  });
  return (
    <>
      <Burger ingredients={ingredient} />
      <BurgerControls addIngredients{} removeIngredients{} />
    </>
  );
}

export default BurgerBuilder;
