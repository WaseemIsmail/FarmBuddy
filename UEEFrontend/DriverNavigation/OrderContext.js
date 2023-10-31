// OrderContext.js
import React, { createContext, useContext, useReducer } from "react";

const OrderContext = createContext();

const initialState = {
  allOrders: [],
  ongoingOrders: [],
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "ACCEPT_ORDER":
      const { orderId } = action.payload;
      const acceptedOrder = state.allOrders.find((order) => order.orderId === orderId);

      return {
        ...state,
        allOrders: state.allOrders.filter((order) => order.orderId !== orderId),
        ongoingOrders: [...state.ongoingOrders, acceptedOrder],
      };
    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
