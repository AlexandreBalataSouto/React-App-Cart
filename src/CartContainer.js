import React, { useReducer, useEffect } from "react";
import { data } from "./data";
import CartItem from "./CartItem";
import reducer from "./reducer";

const CartContainer = () => {
  const defaultState = {
    amount: 0,
    items: [],
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const getItems = () => {
    let newState = {
      price: 0,
      items: data,
    };
    data.forEach((item) => {
      newState.price += item.price;
    });
    dispatch({ type: "INIT_VALUES", payload: newState });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ONE_ITEM", payload: id });
  };

  const clearItems = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  const actionItem = (action, id) => {
    dispatch({ type: "ACTION_ITEM", payload: { action: action, id: id } });
  };

  useEffect(() => {
    getItems();
  }, []);

  if (state.items.length > 0) {
    return (
      <div className="cartContainer">
        <div className="cartContainer_title">
          <h1>YOUR BAG</h1>
        </div>
        <div>
          {state.items.map((item) => {
            return (
              <CartItem
                key={item.id}
                {...item}
                removeItem={removeItem}
                actionItem={actionItem}
              ></CartItem>
            );
          })}
        </div>
        <div className="cartContainer_footer">
          <hr />
          <div className="cartContainer_amount">
            <div>
              <strong>Total</strong>
            </div>
            <div>
              <strong>${state.amount}</strong>
            </div>
          </div>
          <button className="cartContainer_btn" onClick={() => clearItems()}>
            clear cart
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cartContainer">
        <div className="cartContainer_title">
          <h1>YOUR BAG</h1>
        </div>
        <div>
          <h2>is currently empty</h2>
        </div>
      </div>
    );
  }
};

export default CartContainer;
