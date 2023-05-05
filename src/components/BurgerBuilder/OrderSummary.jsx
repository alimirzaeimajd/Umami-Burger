import Button from "react-bootstrap/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <>
      <div>
        <h3>Your Burger</h3>
        <p>A attractive Burger with folowing ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {props.totalPrice}$</strong>
        </p>
        <p>do you want continue checkout?</p>
        <Button variant="success" clicked={props.continueHandler}>
          CONTINUE
        </Button>
        <Button variant="danger" clicked={props.cancelHandler}>
          CANCEL
        </Button>
      </div>
    </>
  );
};

export default OrderSummary;
