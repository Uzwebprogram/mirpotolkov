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

export const PhoneItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ::before {
    content: "";
    position: absolute;
    transform: translateX(-40%) translateX(-50%);
    display: block;
    width: 180px;
    left: 97%;
    z-index: 1;
    height: 30px;
    border-radius: 10px;
    animation-name: plus-bord;
    -webkit-animation: pulse-bord 1500ms ease-out infinite;
    animation: pulse-bord 1500ms ease-out infinite;

    @media screen and (max-width: 426px) {
      width: 159px;
      left: 95%;
      height: 25px;
    }
    @media screen and (max-width: 376px) {
      width: 127px;
      left: 94%;
      height: 19px;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 7px;
    font-weight: bold;
    font-size: 20px;
    @media screen and (max-width: 376px) {
      font-size: 11px !important;
    }
    span {
      font-weight: bold;
      font-size: 30px;

      @media screen and (max-width: 376px) {
        font-size: 11px !important;
      }
    }

    @media only screen and (max-width: 768px) {
      font-size: 14px;
      span {
        font-size: 20px;
      }

      @keyframes pulse-bord {
        0% {
          transform: translateX(-100%) translateY(-1%) translateZ(0);
          opacity: 1;
          box-shadow: 0px 0px 0px 0px #224066;
        }
        100% {
          transform: translateX(-100%) translateY(-1%) translateZ(0);
          opacity: 0;
          box-shadow: 0px 0px 0px 20px #224066;
        }
      }
    }
    @media screen and (max-width: 426px) {
      span {
        font-size: 15px;
      }
    }
  }

  @media only screen and (max-width: 680px) {
    margin: 10px 0;
  }
`;
