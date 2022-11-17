import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  button {
    background-color: #f67263;
    padding: 10px 50px;
    text-align: center;
    cursor: pointer;
    border: none;
    margin: 0 10px 10px 10px;
    color: white;
    border-radius: 20px;
  }

  select {
    display: flex;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
    text-transform: uppercase;
    color: white;
    border: none;
    background: #f67263;
    padding: 10px 20px;
    margin: 0 10px 20px 10px;
    cursor: pointer;
    border-radius: 20px;
    outline: none;
    /* position: absolute;
    top: 10px;
    left: 42%; */
  }
  /* select:nth-child(2){
    position: absolute;
    top: 10px;
    left: 21.5%;
  } */
`;

export const SelectWrapper = styled.div`
  position: absolute;
  top: -20px;
  left: 32.5%;
  @media only screen and (max-width: 1366px) {
    position: absolute;
    top: -20px;
    left: 25%;
  }
  @media only screen and (max-width: 2560px) and (min-width: 1700px) {
    position: absolute;
    top: -18.5px;
    left: 40%;
  }
`;
