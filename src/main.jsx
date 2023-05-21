import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import OrderSummary from "./pages/OrderSummary";
import NoPage from "./NoPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";

export default function Main(props) {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route
              path="/burger-builder/order-page"
              exact
              element={
                <OrderSummary
                  ingredients={props.ingredients}
                  totalPrice={props.totalPrice}
                />
              }
            />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
