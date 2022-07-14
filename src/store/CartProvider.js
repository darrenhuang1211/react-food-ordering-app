import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
   items: [],
   totalAmount: 0
};

const cartReducer = (state, action) => {
   switch (action.type) {
      case 'ADD':
         const updatedItems = state.item.concat(action.item);
         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
         return {items: updatedItems, totalAmount: updatedTotalAmount};
      default:
         throw new Error();
   }
};

const CartProvider = props => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

   const addItemToCartHandler = (item) => {
      const existingItem = this.items.find(currentItem => currentItem.id === item.id);

      if (existingItem) {
         existingItem.amount += item.amount;
      }
      else {
         dispatchCartAction({type: "ADD", item: item});
      }
   };

   const removeItemFromCartHandler = (id) => {}

   const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler
   };

   return <CartContext.Provider value={cartContext}>
      {props.children}
   </CartContext.Provider>
};

export default CartProvider;