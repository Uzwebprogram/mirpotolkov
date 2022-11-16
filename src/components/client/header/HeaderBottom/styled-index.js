import styled from "styled-components";

export const WrapperNavBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
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
  @media only screen and (max-width: 320px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 30px 0 0 20px;
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
    color: #000;
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
    color: #000;
    text-decoration: none;
    margin: 0 7px;
    font-weight: bold;
    font-size: 20px;
    @media only screen and (max-width: 880px){
      font-size: 16px !important;
    }
    span {
      font-weight: bold;
      font-size: 30px;
      @media only screen and (max-width: 880px){
      font-size: 20px !important;
    }
    }
    @media only screen and (max-width: 880px){
      margin: 10px 0;
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
    padding: 7px 7px 7px 35px;
    border: none;
    outline: none;
    background: #d4665c;
    color: #fff;
    border-radius: 50px;
    font-weight: 500;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      animation: glow2 1s linear infinite;
      -moz-animation: glow2 1s linear infinite;
      -webkit-animation: glow2 1s linear infinite;
      -o-animation: glow2 1s linear infinite;
    color: #fff !important; 

    i {
      margin: 2px 0 0 20px;
      font-size: 25px;
      color: #fff;
    }
  }
  @keyframes glow2 {
  50% {
    box-shadow: 0 0 0.5vw #fff, 0 0 1vw #fff, 0 0 2vw #fff,
      0 0 3vw #fff, 0 0 4vw #fff, 0 0 4vw #fff, 0 0 3vw #fff,
      0 0 0.5vw #fff;
  }
  0%,
  100% {
    box-shadow: 0 0 0.5vw #fff, 0 0 1vw #fff, 0 0 2vw #fff,
      0 0 3vw #fff, 0 0 5vw #fff, 0 0 2vw #fff, 0 0 1vw #fff,
      0 0 0.5vw #fff;
    -webkit-box-stroke: 0.1px #fff;
  }
}

`;
