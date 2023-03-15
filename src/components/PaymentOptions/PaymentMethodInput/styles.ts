import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
input {
  visibility: hidden;
  appearance: none;
 
}

input:checked +label div{
  background-color: #e5dbff;
  border: #a37eff solid 1.5px;
}


`
export const ContentContainer = styled.div`
position:relative;
 cursor: pointer;

 display: grid;
  grid-template-columns: 1rem 6rem;
  column-gap: 0.75rem;
  row-gap: 0.75rem;
    text-align: left;
   justify-content: flex-start;
    font-weight: 400;
    width: 180.67px;
    background-color: #e6e5e5;
    border: none;
    border-radius: 6px;
    padding: 16px 10px;
    font-size: 0.7rem;
    color: #574f4d;

    img {
      display: flex;
      
    }

    

   
`