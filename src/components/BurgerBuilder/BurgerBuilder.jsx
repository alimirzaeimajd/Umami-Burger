import { useState } from "react";
import Burger from "./Burger/Burger";
import BurgerControls from "./BurgerControls/BurgerControls";
import BootstrapNavbar from "../ReactBootsrap/BootstrapNavbar";
export default function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    meat: 1,
    salad: 1,
    cheese: 1,
    bacon: 1,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [meat, setMeat] = useState(1);
  const [salad, setSalad] = useState(1);
  const [bacon, setBacon] = useState(1);
  const [cheese, setCheese] = useState(1);
  const [ingredientsPrices, setIngredientPrices] = useState({
    salad: 0.25,
    cheese: 0.5,
    meat: 5,
    bacon: 1,
  });

  return (
    <>
      <BootstrapNavbar />
      <Burger ingredients={ingredients} />
      <BurgerControls />
    </>
  );
}
