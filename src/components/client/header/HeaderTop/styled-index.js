import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999999;
  right: 0;
  left: 0;
  top: 0;

  padding: 5px 0;

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
  overflow:hidden ;

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: space-around;
  }

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: space-evenly;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 1042px) {
    display: flex;
  }
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
      @media only screen and (max-width: 427px) {
        width: 170px;
        height: 43px;
      }
      @media screen and (max-width: 372px) {
        width: 160px;
        height: 37px;
      }

      @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
        width: 110px;
        height: 30px;
        object-fit: cover;
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
  animation: glow 1s linear infinite;
  -moz-animation: glow 1s linear infinite;
  -webkit-animation: glow 1s linear infinite;
  -o-animation: glow 1s linear infinite;
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 7px;
    font-weight: bold;
    font-size: 20px;
    @media screen and (max-width: 397px) {
      font-size: 12px !important;
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 10px !important;
    }
    span {
      font-weight: bold;
      font-size: 25px;

      @media screen and (max-width: 390px) {
        font-size: 11px !important;
      }
      @media screen and (max-width: 372px) {
        font-size: 10px !important;
      }
    }

    @media only screen and (max-width: 768px) {
      font-size: 14px;
      span {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 426px) {
      span {
        font-size: 15px;
      }
    }
  }
  @keyframes glow {
    50% {
      box-shadow: 0 0 0.5vw #4a71a3, 0 0 4vw #4a71a3, 0 0 5vw #4a71a3,
        0 0 7vw #4a71a3, 0 0 8vw #4a71a3, 0 0 9vw #4a71a3, 0 0 6vw #4a71a3,
        0 0 0.5vw #4a71a3;
      color: #4a71a3;
    }
    0%,
    100% {
      box-shadow: 0 0 0.5vw #4a71a3, 0 0 1vw #4a71a3, 0 0 2vw #4a71a3,
        0 0 3vw #4a71a3, 0 0 5vw #4a71a3, 0 0 2vw #4a71a3, 0 0 1vw #4a71a3,
        0 0 0.5vw #4a71a3;
      color: #4a71a3;
      -webkit-box-stroke: 0.1px #4a71a3;
    }
  }

  @media only screen and (max-width: 680px) {
    margin: 10px 0;
  }
`;
