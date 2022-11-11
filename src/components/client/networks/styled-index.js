import styled from "styled-components";

export const WrapperFixed = styled.div`
  position: fixed;
  right: 0px;
  top: 50%;
  transform: translate(0, -50%);
  background-color: rgb(34, 64, 102);
  width: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  z-index: 1000;
`;
export const Wrapper = styled.div`
    a{
        text-decoration: none;
        color: white;
        writing-mode: vertical-lr; 
}
`;
