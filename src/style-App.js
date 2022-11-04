import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.div`
  display: flex;
`;
export const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior:smooth
    }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${(props) => (props.whiteColor ? "#F1F4FA" : " white")};
  }
`;

export const WrapperContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
`;
