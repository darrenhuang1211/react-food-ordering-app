import styled from "styled-components";
import Input from "../../UI/Input";

const StyledForm = styled.form`
   text-align: right;
   
   button {
      font: inherit;
      cursor: pointer;
      background-color: #8a2b06;
      border: 1px solid #8a2b06;
      color: white;
      padding: 0.25rem 2rem;
      border-radius: 20px;
      font-weight: bold;
   }
   
   button:hover,
   button:active {
      background-color: #641e03;
      border-color: #641e03;
   }
`;

const MealItemForm = props => {
   const submitHandler = event => {
      const enteredNumber = document.getElementById('amount_' + props.id).value;
      const amountNumber = +enteredNumber;
   
      event.preventDefault();

      if (enteredNumber.trim().length === 0 || amountNumber < 1 || amountNumber > 5) {
         return;
      }

      props.onAddToCart(amountNumber);
   };

   return (
      <StyledForm onSubmit={submitHandler}>
         <Input 
            label="Amount" 
            input={{
               id: 'amount_' + props.id,
               type: 'number',
               min: '1',
               max: '5',
               step: '1',
               defaultValue: '1',
           }}
         />
         <button type="submit">+ Add</button>
      </StyledForm>
   );
};

export default MealItemForm;