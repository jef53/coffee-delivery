import styled, { css } from "styled-components";

interface InputStyleContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`

position:relative;
display:flex;
align-items: center;
justify-content: space-between;

background-color: #e6e5e5;

margin: 8px 8px 8px 0px;
border: 1px rgb(223, 223, 223) solid;
border-radius: 6px;

&:focus-within{
  border:1px solid rgb(250, 255, 173) ;
  transition:0.2s linear;
}

${({ hasError }) => hasError && css`
border: 1px rgb(255, 121, 121)  solid;

`}
    
`;

export const InputWrapper = styled.div`
display:flex;
flex-direction: column;

`

export const ErrorContainer = styled.div`
margin:0;
padding:0;
display:flex;
flex-direction: column;


 div{
  color:red;
  font-size:0.7rem;
 }

`

export const RightText = styled.p`
font-size:0.70rem;
margin: 0.25rem;
padding:0 0.75rem 0 0;

font-style:italic;
 color:gray; 
 
`

export const InputStyled = styled.input`
flex:1;
height: 100%;
background:none;
border:none;


font-size: 0.7rem;
color: #8d8686;
padding: 8px;
`