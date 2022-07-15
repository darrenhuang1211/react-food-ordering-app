import { useContext } from "react";
import styled from "styled-components";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const StyledMealItem = styled.li`
   display: flex;
   justify-content: space-between;
   margin: 1rem;
   padding-bottom: 1rem;
   border-bottom: 1px solid #ccc;

   h3 {
      margin: 0 0 0.25rem 0;
   }

   .description {
      font-style: italic;
   }

   .price {
      margin-top: 0.25rem;
      font-weight: bold;
      color: #ad5502;
      font-size: 1.25rem;
   }
`;

const MealItem = ({id, name, description, price}) => {
   const cartContext = useContext(CartContext);
   const formattedPrice = `$${price.toFixed(2)}`;

   const addToCartHandler = amount => {
      cartContext.addItem({
         id: id,
         name: name,
         price: price,
         amount: amount
      });
   };
   
   return (
      <StyledMealItem>
         <div>
            <h3>{name}</h3>
            <div className="description">{description}</div>
            <div className="price">{formattedPrice}</div>
         </div>
         <div>
            <MealItemForm id={id} onAddToCart={addToCartHandler}/>
         </div>
      </StyledMealItem>
   );
};

export default MealItem;