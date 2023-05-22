import Burger from "./Burger/Burger";
import BurgerControls from "./BurgerControls/BurgerControls";
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";

function BurgerBuilder(props) {
  const disableButton = {
    ...props.ings,
  };
  for (let key in disableButton) {
    disableButton[key] = disableButton[key] <= 0;
  }

  return (
    <>
      <Burger ingredients={props.ings} />
      <BurgerControls
        addIngredients={props.onIngredientAdded}
        removeIngredients={props.onIngredientRemoved}
        totalprice={props.price}
        disabled={disableButton}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
