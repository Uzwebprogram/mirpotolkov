import styled from "styled-components";
import vig from "../../../assets/images/client/vig.png";

export const Section = styled.div`
  width: 100%;
  z-index: 2;
  position: relative;
`;

export const CeilCardWrapper = styled.div`
  width: 100%;
  padding: 0 0 70px 0;
  h2 {
    font-size: 46px;
    font-weight: 200;
    padding-top: 100px;
    font-family: sans-serif;
    color: #224066;
    @media only screen and (max-width: 1068px) {
      padding-left: 30px;
    }
    @media only screen and (max-width: 812px) {
      font-size: 36px;
      padding-bottom: -200px;
    }

    span {
      font-weight: bold;
    }
  
  }
`;
export const CeilCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media only screen and (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media only screen and (max-width: 1068px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 0 120px 0;
  }

  @media only screen and (max-width: 812px) {
    padding: 0 0 120px 0;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`;

export const CeilItem = styled.div`
  height: 550px;
  background: url(${vig}) no-repeat 20px 50%;

  @media only screen and (max-width: 576px) {
    background-image: none;
    background: #fff;
    margin: 10px 0;
    padding: 60px 10px 10px 10px;
    border-radius: 5px;
    /* clip-path: polygon(0 14%, 100% 6%, 100% 91%, 0% 100%); */
    clip-path: polygon(
      48% 7%,
      100% 14%,
      100% 60%,
      100% 85%,
      43% 100%,
      0 95%,
      0 0
    );
  }

  h4 {
    font-size: 22px;
    color: #213a66;
    font-family: sans-serif;
    text-transform: capitalize;
  }

  img {
    margin: -15px 20px 10px 0;

    @media only screen and (max-width: 576px) {
      /* margin: 0; */
      width: 100%;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
      width: 100%;
      height: 173px;
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 3) {
      width: 100%;
      height: 200px;
    }
  }

  a {
    text-decoration: none;
    background: #213a66;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 10px 10px 10px 35px;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    width: 70%;
      font-weight: 600;
    i {
      font-size: 25px;
    }
  }
`;

export const Discount = styled.div`
  display: flex;
  align-items: center;

  div:nth-child(1) {
    background: #d4665c;
    border-radius: 2px;
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
    color: #fff;
    font-size: 22px;
    padding: 10px 18px;

    p {
      margin: 0;
      font-size: 18px;
      font-family: sans-serif;
      span {
        font-weight: bold;
      }
    }
  }

  div:nth-child(2) {
    i {
      font-size: 30px;
      margin-bottom: 10px;
    }
    p {
      margin: 0;
      font-size: 14px;
      font-family: sans-serif;

      span {
        font-size: 16px;
        font-weight: bold;
        margin: -10px 0 0 0;
        font-family: sans-serif;
      }
    }
  }
`;

export const DiscountItem = styled.div`
  margin: 0 20px 0 0;
`;

export const Line = styled.div`
  background: #d9d6e2;
  height: 1px;
  width: 80%;
`;

export const LeftBlock = styled.div`
  p {
    font-size: 14px;
    font-weight: bold;
    font-family: sans-serif;
  }
`;

export const WrapperUser = styled.div`
  display: flex;
  margin-top: 20px;
  img{
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border: 5px solid #213a66;
  }
  span{
    font-size: 20px;
    color: #213a66;
    font-family: sans-serif;
    text-transform: capitalize;
  }
`