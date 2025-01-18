import React, { createContext, useContext, useReducer, useEffect } from "react";
import Reducer from "../reducer/Reducer";

const initialState = {
  foods: [],
  filteredFoods: [],
  searchMenu: "",
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  quantity:1,
  total_price: "",
  charge: 50,
  total_item: ""

};

const MenuContext = createContext();

const MenuProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));

    dispatch ({type: "TOTAL_PRICE"});

    dispatch ({type: "TOTAL_ITEM"});

  }, [state.cart]);


  const fetchData = async () => {
    try {
      const res = await fetch("/api/foods");
      const data = await res.json();
      dispatch({ type: "GET_FOODS", payload: data });
    } catch (error) {
      console.log("Error fetching foods:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  const filterByType = (type) => {
    dispatch({ type: "FILTER_BY_TYPE", payload: type });
  };

  const addToCart = (item) => {
    dispatch({type: "ADD_TO_CART", payload:item})
  }

  const removeItem = (itemId) => {
    dispatch({type: "REMOVE_ITEM", payload:itemId})
  }

  const setIncrease = (id) => {
    dispatch ({type: "INCREMENT", payload:id})
  }

  const setDecrease = (id) => {
    dispatch ({type: "DECREMENT", payload:id})
  }

  return (
    <MenuContext.Provider value={{ ...state, filterByType, addToCart, removeItem, setIncrease, setDecrease }}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenu = () => useContext(MenuContext);

export { MenuContext, MenuProvider, useMenu };
