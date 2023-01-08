import { useEffect, useReducer } from "react";
import axios from "axios";
import "./App.module.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products />
      <Cart />
    </div>
  );
}

export default App;
