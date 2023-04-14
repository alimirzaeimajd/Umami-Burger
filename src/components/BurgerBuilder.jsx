import { useState } from "react";
import Burger from "./Burger";
import BurgerControls from "./BurgerControls";
function BurgerBuilder() {
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
    // const oldCount = ingredients[type];
    const updatedCount = setIngredients(ingredients[type] + 1);
    // const updatedIngredients = {
    //   ...this.props.init,
    // };
    ingredients[type] = updatedCount;
    // const showPrice = INGREDIENT_PRICES[type];
    // const oldPrice = this.state.totalPrice;
    // const newPrice = oldPrice + showPrice;
    const showPrice = ingredientsPrices[type];
    const oldPrice = totalPrice;
    const newPrice = setIngredientPrices(totalPrice + ingredientsPrices);
    console.log(newPrice);
    // this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    // this.updatePurchasable(updatedIngredients);
  };

  const removeIngredientsHandler = (type) => {
    // const oldCount = this.props.init[type];
    const updatedCount = setIngredients(ingredients[type] + 1);
    if (ingredients[type] <= 0) {
      return;
    }
    ingredients[type] = updatedCount;
    // const updatedCount = setIngredients(ingredients[type] - 1);
    // const updatedIngredients = ingredients
    // updatedIngredients[type] = updatedCount;
    // const showPrice = INGREDIENT_PRICES[type];
    // const oldPrice = this.state.totalPrice;
    // const newPrice = oldPrice - showPrice;
    // this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    // this.updatePurchasable(updatedIngredients);
    const showPrice = ingredientsPrices[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - showPrice;
    console.log(newPrice);
  };
  return (
    <>
      <Burger ingredients={ingredients} />
      <BurgerControls
        addIngredients={addIngredientsHandler}
        removeIngredients={removeIngredientsHandler}
      />
    </>
  );
}

export default BurgerBuilder;
