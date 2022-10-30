import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.div`
display: flex;
`
export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: ${props => (props.whiteColor ? '#F1F4FA' : 'white')};
  }
`

export const WrapperContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
`