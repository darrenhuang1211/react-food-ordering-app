import styled from "styled-components";
import Card from "../UI/Card";

const StyledCart = styled.div`
   .cart-items {
      list-style: none;
      margin: 0;
      padding: 0;
      max-height: 20rem;
      overflow: auto;
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

const Cart = props => {
   const cartItems = <ul className="cart-items">{[{
      id: "c1",
      name: "Sushi",
      price: 22.99,
      amount: 2
   }].map(item => {
      return <li>{item.name}</li>
   })}</ul>

   return (
      <Card>
         <StyledCart>
               {cartItems}
               <div className="total">
                  <span>Total Amount</span>
                  <span>$100.00</span>
               </div>
               <div className="actions">
                  <button className="button--alt">Close</button>
                  <button className="button">Order</button>
               </div>
         </StyledCart>
      </Card>
   );
};

export default Cart;