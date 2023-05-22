import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

const OrderSummery = (props) => {
  const ingredientSummary = Object.keys(props.ings).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ings[igKey]}
      </li>
    );
  });

  return (
    <>
      <div className="card text-bg-dark mb-3 position-absolute top-50 start-50 translate-middle">
        <h3 className="card-header">Your Burger</h3>
        <div className="card-body">
          <p>A attractive Burger with folowing ingredients:</p>
          <ul>{ingredientSummary}</ul>
          <p>
            <strong className="card-title">
              Total Price: {props.totalPrice}$
            </strong>
          </p>
          <p>do you want continue checkout?</p>
        </div>
        <div className="btn-group">
          <button className="btn btn-success">CONTINUE</button>
          <button className="btn btn-danger">CANCEL</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(OrderSummery);
