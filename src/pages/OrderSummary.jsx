import Button from "react-bootstrap/Button";

const OrderSummery = (props) => {
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
      <h3>Your Burger</h3>
      <p>A attractive Burger with folowing ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.totalPrice}$</strong>
      </p>
      <p>do you want continue checkout?</p>
      <Button variant="success">CONTINUE</Button>
      <Button variant="danger">CANCLE</Button>
    </>
  );
};

export default OrderSummery;
