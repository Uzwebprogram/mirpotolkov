import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  select {
    background-color: #224066;
    color: #000;
    padding: 8px 10px 8px 15px;
    cursor: pointer;
    outline: none;
    border-radius: 7px;
    border: none;
    color: #fff;

    select:after {
      position: absolute;
      content: "";
      top: 14px;
      right: 10px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-color: #fff transparent transparent transparent;
    }
  }
  /* select option{
        background-color: ;
    } */
  a {
    background: #ffd700;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #000000;
    padding-top: 18px;
    padding-bottom: 19px;
    padding-left: 41px;
    padding-right: 31px;
    text-decoration: none;
  }
  button {
    display: none;
  }
  @media only screen and (max-width: 1024px) {
    a {
      padding-top: 18px;
      padding-bottom: 19px;
      padding-left: 15px;
      padding-right: 14px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 270px;
    a {
      padding-top: 18px;
      padding-bottom: 19px;
      padding-left: 15px;
      padding-right: 14px;
    }
    select {
      display: none;
    }
    button {
      display: block;
      background-color: transparent;
      border: none;
    }
  }
  @media only screen and (max-width: 449px) {
    width: 70%;
    a {
      padding-top: 18px;
      padding-bottom: 19px;
      padding-left: 10px;
      padding-right: 9px;
      font-size: 18px;
    }
  }
`;
