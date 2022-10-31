import { style } from "@mui/system";
import styled from "styled-components";
import primer from "../../../../assets/images/client/primer.png";

export const Section = styled.div`
  width: 100%;
  div {
    h2 {
      margin-top: 120px;
      font-size: 46px;
      color: #20262b;
      text-align: left;
      margin-bottom: 34px;
      padding-right: 133px;
      font-weight: 200;
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
`;

export const Card = styled.div`
  width: 573px;
  background: transparent url(${primer}) no-repeat scroll center top / cover;
  height: 490px;
  margin: 0 0 170px 0;
`;

export const CardHeader = styled.div`
  h4 {
    font-size: 32px;
    color: #224066;
    font-weight: 200;
    margin: 20px 0 30px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  align-items: top;
  justify-content: flex-start;
`;

export const CardImg = styled.div`
  div {
    img {
      margin: 5px 10px 0 0;
    }
  }
`;

export const CardImgContent = styled.div`
  margin: 0 0 0 20px;
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

  img {
    margin: 20px 15px 0 0;
  }
  div {
    width: 477px;
    padding: 0 50px 0 0;

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
