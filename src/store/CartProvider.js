import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
   items: [],
   totalAmount: 0
};

const cartReducer = (state, action) => {
   switch (action.type) {
      case 'ADD':
         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
         
         const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
         const existingCartItem = state.items[existingItemIndex];

         let updatedItem;
         let updatedItems;

         if (existingCartItem) {
            updatedItem = {
               ...existingCartItem,
               amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
         }
         else {
            updatedItems = state.items.concat(action.item);
         } 
         return {items: updatedItems, totalAmount: updatedTotalAmount};
      default:
         throw new Error();
   }
};

const CartProvider = props => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

   const addItemToCartHandler = (item) => {
      dispatchCartAction({type: "ADD", item: item});
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