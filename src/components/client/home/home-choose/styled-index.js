import styled from "styled-components";
import grayBg1 from "../../../../assets/images/client/sery1.png";
import varBg from "../../../../assets/images/client/var.png";

export const Section = styled.div`
  width: 100%;
  margin-top: -150px;
  padding-top: 100px;
  height: 800px;
  background: transparent url(${grayBg1}) no-repeat scroll center top / cover;
  position: relative;
  z-index: 1;
  div {
    h2 {
      margin: 120px 0 34px 20px;
      font-size: 46px;
      color: #224066;
      text-align: left;
      font-weight: 200;
    }
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 0 0;
`;
export const Card = styled.div`
  width: 382px;
  background: url(${varBg}) no-repeat 20px 50%;
  height: 390px;
`;

export const CardHeader = styled.div`
  h4 {
    font-size: 20px;
    margin: 0 20px 10px 40px;
    font-size: 20px;
    color: #224066;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const CardBody = styled.div`
  position: relative;
`;

export const Prise = styled.div`
  position: absolute;
  background: #d4665c;
  border-radius: 2px;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
  color: #fff;
  font-size: 22px;
  padding: 10px 18px;
  top: 126px;
  left: 43px;

  strike {
    font-size: 16px;
  }
  span {
    font-weight: bold;
    font-size: 27px;
  }
`;

export const FlagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 50px;

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    padding-left: 20px;
    margin-right: 25px;
    color: #224066;
    font-weight: bold;
  }
`;

export const CardFooter = styled.div`
  button {
    background: #213a66;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 10px 10px 10px 35px;
    margin: 7px 0 0 45px;
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
