import styled from "styled-components";
import grayBg from "../../../../assets/images/client/sery.png";
import vig from "../../../../assets/images/client/vig.png";

export const Section = styled.div`
  width: 100%;
  /* height: 840px; */
  z-index: 2;
  position: relative;
  background: transparent url(${grayBg}) no-repeat scroll center top / cover;
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
    span{
        font-weight: bold;

    @media only screen and (max-width: 1068px) {
      padding-left: 40px;
    }
    @media only screen and (max-width: 812px) {
      font-size: 36px;
      padding-bottom: -200px;
    }

    span {
      font-weight: bold;
    }
  }
}
`
export const CeilCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 1068px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 0 120px 0;
  }

  @media only screen and (max-width: 812px) {
    padding: 0 0 120px 0;
  }
`;

export const CeilItem = styled.div`
  height: 550px;
  background: url(${vig}) no-repeat 20px 50%;

  @media only screen and (max-width: 1068px) {
    margin: 0 70px;
  }

  h4 {
    font-size: 22px;
    color: #213a66;
    font-family: sans-serif;
  }

  img {
    margin: -15px 20px 10px 0;
  }

  button {
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
    font-weight: 600;

    i {
      font-size: 25px;
      margin-left: 20px;
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
