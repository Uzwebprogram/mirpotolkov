import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.div`
display: flex;
`
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.whiteColor ? '#F1F4FA' : 'white')};
  }
`