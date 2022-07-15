import { useContext } from "react";
import styled from "styled-components";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const StyledCart = styled.div`
   .cart-items {
      list-style: none;
      margin: 0;
      padding: 0;
      max-height: 20rem;
      overflow: scroll;
   }

   .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      font-size: 1.5rem;
      margin: 1rem 0;
   }

   .actions {
      text-align: right;
   }

   button {
      font: inherit;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #8a2b06;
      padding: 0.5rem 2rem;
      border-radius: 25px;
      margin-left: 1rem;
   }

   button:hover,
   button:active {
      background-color: #5a1a01;
      border-color: #5a1a01;
      color: white;
   }

   .button--alt {
      color: #8a2b06;
   }

   .button {
      background-color: #8a2b06;
      color: white;
   }
`;

const Cart = ({onClose}) => {
   const cartContext = useContext(CartContext);

   const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
   const hasItems = cartContext.items.length > 0;

   const addItemHandler = item => {
      console.log("add");
   };

   const removeItemHandler = id => {
      console.log("remove");
   };

   const cartItems = <ul className="cart-items">
      {cartContext.items.map(item => {
         return <CartItem 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            amount={item.amount}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
         />
   })}</ul>

   return (
      <Modal onBackdropClick={onClose}>
         <StyledCart>
               {cartItems}
               <div className="total">
                  <span>Total Amount</span>
                  <span>{totalAmount}</span>
               </div>
               <div className="actions">
                  <button className="button--alt" onClick={onClose}>Close</button>
                  {hasItems && <button className="button">Order</button>}
               </div>
         </StyledCart>
      </Modal>
   );
};

export default Cart;