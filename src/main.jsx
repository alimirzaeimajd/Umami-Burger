import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPage from "./pages/OrderPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/order-page" element={<OrderPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
