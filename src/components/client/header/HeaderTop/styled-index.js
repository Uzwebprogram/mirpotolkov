import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999999;
  right: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 10px 0 25px rgb(0 0 0 / 20%);
  @media only screen and (max-width: 1042px) {
    display: none;
  }

  @media only screen and (max-width: 680px) {
    overflow-x: hidden;
  }
`;

export const NavBar = styled.div`
  /* width: 100%; */
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and(max-width: 1042px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0 0 0 50px;
  margin: 0;

  li {
    margin: 0 20px;

    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      color: #224066;
    }
  }
`;

export const SectionMobile = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  box-shadow: 10px 0 25px rgb(0 0 0 / 20%);
  display: none;

  @media only screen and (max-width: 1042px) {
    display: flex;
  }

  /* @media only screen and (max-width: 1220px) {
    div {
      a {
        display: none !important;
      }
    }
  } */
  @media only screen and (max-width: 425px) {
    a {
      margin: 0;
      font-size: 13px;
      span {
        font-size: 13px;
      }
    }
  }

  div {
    display: flex;
    align-items: center;

    img {
      @media only screen and (max-width: 452px) {
        width: 170px;
        height: 50px;
      }
      @media only screen and (max-width: 425px) {
        width: 170px;
        height: 50px;
      }
    }
  }

  button {
    border: none;
    outline: none;
    background: none;

    i {
      font-size: 35px;
      color: #224066;
    }
  }
`;
