import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Burger from "./Burger/Burger";
import BurgerControls from "./BurgerControls/BurgerControls";
import OrderSummary from "./OrderSummary";
import App from "../../redux-test/App";
export default function BurgerBuilder() {
  const [state, setState] = useState({
    ingredients: {
      meat: 0,
      salad: 0,
      cheese: 0,
      bacon: 0,
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
  };
  const disableButton = {
    ...state.ingredients,
  };
  for (let key in disableButton) {
    disableButton[key] = disableButton[key] <= 0;
  }

  return (
    <>
      <Burger ingredients={state.ingredients} />
      <BurgerControls
        addIngredients={addIngredientsHandler}
        removeIngredients={removeIngredientsHandler}
        totalprice={state.totalPrice}
        disabled={disableButton}
      />
      <Switch>
        <Route
          path="/burger-builder/order-page"
          exact
          element={
            <OrderSummary
              ingredients={state.ingredients}
              totalPrice={state.totalPrice}
            />
          }
        />
        {/* <Route path="/burger-builder/redux-test" exact element={<App />} /> */}
      </Switch>
      <App />
    </>
  );
}
