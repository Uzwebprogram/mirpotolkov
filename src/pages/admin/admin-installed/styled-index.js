import { style } from "@mui/system";
import styled from "styled-components";
import primer from "../../../assets/images/client/primer.png";

export const Section = styled.div`
  width: 100%;
  padding: 50px 0;
  div {
    h2 {
      margin-top: 120px;
      font-size: 46px;
      color: #20262b;
      text-align: left;
      margin-bottom: 34px;
      padding-right: 133px;
      font-weight: 200;

      @media only screen and (max-width: 1222px) {
        padding: 0 20px;
      }
      @media only screen and (max-width: 516px) {
        font-size: 36px;
        margin-top: 20px;
      }
    }
  }
`;

export const Next = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #eeedf2;
  border-radius: 50px;
  padding: 10px;

  @media only screen and (max-width: 1118px) {
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 1242px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 70px;
  }

  div {
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 0;
      font-size: 18px;
      color: #224066;
      text-decoration: none;
    }

    i {
      margin: 0 10px 0 0;
      font-size: 30px;
      color: #224066;
    }
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 516px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 1222px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media only screen and (max-width: 1118px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 573px;
  background: transparent url(${primer}) no-repeat scroll center top / cover;
  height: 490px;
  margin: 0 0 170px 0;

  @media only screen and (max-width: 1118px) {
    width: 500px;
  }
  @media only screen and (max-width: 1024px) {
    width: 500px;
  }
  @media only screen and (max-width: 1024px) {
    background: none;
    margin: 0 0 200px 0;
  }
  @media only screen and (max-width: 516px) {
    width: 100%;
    margin: 0 0 450px 0;
  }

  @media only screen and (max-width: 516px) {
    width: 100%;
    margin: 0 0 550px 0;
  }
`;

export const CardHeader = styled.div`
  @media only screen and (max-width: 516px) {
    padding: 0 20px;
  }
  h4 {
    font-size: 32px;
    color: #224066;
    font-weight: 200;
    margin: 20px 0 30px;

    @media only screen and (max-width: 516px) {
      font-size: 25px;
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  align-items: top;
  justify-content: flex-start;

  @media only screen and (max-width: 516px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media only screen and (max-width: 516px) {
      /* width: 100%; */
      padding: 0 20px;
    }
  }
`;

export const CardImg = styled.div`
  @media only screen and (max-width: 516px) {
    width: 100%;
    /* padding: 0 20px; */
  }

  img {
    margin: 5px 10px 0 0;
    width: 100%;
  }
`;

export const MiniImg = styled.div`
  img {
    margin: 5px 10px 0 0;
    width: 63px;
  }
`;

export const CardImgContent = styled.div`
  margin: 0 0 0 20px;
  @media only screen and (max-width: 516px) {
    margin: 10px 0 0 0;
  }
  p {
    font-size: 12px;
    margin-top: 24px;
    font-weight: 500;
    :nth-child(1) {
      margin: 0 0 10px 0;
      color: #8d949a;
      font-size: 12px;
      margin-bottom: 10px;
    }
  }

  p:last-child {
    margin-top: 20px;
    font-size: 28px;
    color: #224066;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    i {
      color: yellow;
      margin: 0 2px;
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: top;
  justify-content: flex-start;
  @media only screen and (max-width: 516px) {
    padding: 0 20px;
    /* width: 100%; */
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  img {
    margin: 20px 15px 0 0;
  }
  div {
    width: 477px;
    padding: 0 50px 0 0;
    @media only screen and (max-width: 516px) {
      width: 90%;
      padding: 0;
    }

    h4 {
      font-size: 18px;
      color: #224066;
      margin-bottom: 14px;
    }
    p {
      font-size: 18px;
      color: #224066;
    }
  }
`;
