import styled from "styled-components";

export const WrapperNavBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1042px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0 0 0;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0 0 0;
  }

  @media only screen and (max-width: 680px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 90%;
    margin: 20px 0 0 20px;
  }
`;

export const LogoItem = styled.div`
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 1042px) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const LocalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #fff;
    margin: 0 7px;
    font-size: 18px;

    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
export const PhoneItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 7px;
    font-weight: bold;
    font-size: 20px;
    span {
      font-weight: bold;
      font-size: 30px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 14px;
      span {
        font-size: 20px;
      }
    }
    @media screen and (max-width : 426px) {
        span{
          font-size: 15px;
        }
      }
  }

  @media only screen and (max-width: 680px) {
    margin: 10px 0;
  }
`;
export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 10px 35px;
    border: none;
    outline: none;
    background: #d4665c;
    color: #fff;
    border-radius: 50px;
    font-weight: 500;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    ::before {
      content: "";
      position: absolute;
      transform: translateX(-40%) translateX(-50%);
      display: block;
      width: 230px;
      left: 90%;
      z-index: 1;
      height: 40px;
      border-radius: 50px;
      animation-name: plus-borde;
      -webkit-animation: pulse-borde 1500ms ease-out infinite;
      animation: pulse-borde 1500ms ease-out infinite;

      @media screen and (max-width : 768px) {
        left: 97.5%;
      }
      @media screen and (max-width : 426px) {
        left: 60%;
      }
      @media screen and (max-width : 376px) {
        left: 68%;
      }
    }

    @keyframes pulse-borde {
      0% {
        transform: translateX(-100%) translateY(-1%) translateZ(0);
        opacity: 1;
        box-shadow: 0px 0px 0px 0px rgba(212 , 102,  92);
      }
      100% {
        transform: translateX(-100%) translateY(-1%) translateZ(0) ;
        opacity: 0;
        box-shadow: 0px 0px 0px 20px rgba(212 , 102,  92);
      }
    }

    i {
      margin: 2px 0 0 20px;
      font-size: 25px;
      color: #fff;
    }
  }
`;
