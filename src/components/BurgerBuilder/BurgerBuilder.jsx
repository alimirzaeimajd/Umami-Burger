import { useState } from "react";
import Burger from "./Burger/Burger";
import BurgerControls from "./BurgerControls/BurgerControls";
import BootstrapNavbar from "../ReactBootsrap/BootstrapNavbar";
export default function BurgerBuilder() {
  const [state, setState] = useState({
    ingredients: {
      meat: 1,
      salad: 1,
      cheese: 1,
      bacon: 1,
    },
    totalPrice: 0,
    INGREDIENT_PRICES: {
      salad: 0.25,
      cheese: 0.5,
      meat: 5,
      bacon: 1,
    },
    purchasable: false,
  });
  function updatePurchasable({ ...ingredient }) {
    const sum = Object.values(ingredient).reduce((sum, val) => sum + val, 0);
    setState({ purchasable: sum > 0 });
  }
  const addIngredientsHandler = (type) => {
    const oldCount = state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const showPrice = state.INGREDIENT_PRICES[type];
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice + showPrice;
    setState({
      ...state,
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };
  const removeIngredientsHandler = (type) => {
    const oldCount = state.ingredients[type];
    if (oldCount < 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const showPrice = state.INGREDIENT_PRICES[type];
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice - showPrice;

    setState({
      ...state,
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    updatePurchasable(updatedIngredients);
  };
  const disableButton = {
    ...state.ingredients,
  };
  for (let key in disableButton) {
    disableButton[key] = disableButton[key] <= 0;
  }

  return (
    <>
      <BootstrapNavbar />
      <Burger ingredients={state.ingredients} />
      <BurgerControls
        addIngredients={addIngredientsHandler}
        removeIngredients={removeIngredientsHandler}
        totalprice={state.totalPrice}
        disabled={disableButton}
      />
    </>
  );
}
