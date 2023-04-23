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
  });

  // addIngredientsHandler = (type) => {
  //   const oldCount = state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {
  //     ...state.ingredients,
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const showPrice = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + showPrice;
  //   this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  //   this.updatePurchasable(updatedIngredients);
  // };

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
    setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  const removeIngredientsHandler = (type) => {
    const oldCount = state.ingredients[type];
    if (oldCount <= 0) {
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
    setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  return (
    <>
      <BootstrapNavbar />
      <Burger ingredients={state.ingredients} />
      <BurgerControls
        addIngredients={addIngredientsHandler}
        removeIngredients={removeIngredientsHandler}
        totalprice={state.totalPrice}
      />
    </>
  );
}
// issue and the idea to fix it: set initialState, set add and remove ingredients with initialState using old code, fix bugs, build the app slowly with details
