import { useState } from "react";
import Burger from "./Burger/Burger";
import BurgerControls from "./BurgerControls/BurgerControls";
import BootstrapNavbar from "../ReactBootsrap/BootstrapNavbar";
export default function BurgerBuilder() {
  const [state] = useState({
    ingredients: {
      meat: 1,
      salad: 1,
      cheese: 1,
      bacon: 1,
    },
    totalPrice: 0,
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

  return (
    <>
      <BootstrapNavbar />
      <Burger ingredients={state.ingredients} />
      {/* <BurgerControls /> */}
    </>
  );
}
// issue and the idea to fix it: set initialState, set add and remove ingredients with initialState using old code, fix bugs, build the app slowly with details
