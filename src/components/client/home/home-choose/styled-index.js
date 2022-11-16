import styled from "styled-components";
import grayBg1 from "../../../../assets/images/client/sery1.png";
import varBg from "../../../../assets/images/client/var.png";

export const Section = styled.div`
  width: 100%;
  margin-top: -150px;
  padding-top: 20px;
  background: transparent url(${grayBg1}) no-repeat scroll center top / cover;
  position: relative;
  z-index: 1;
  overflow: hidden;
  @media only screen and (max-width: 1142px) {
    padding: 20px 0 50px 0;
  }

  @media only screen and (max-width: 915px) {
    background-image: none;
    background: #eeedf2;
  }
  div {
    h2 {
      margin: 100px 0 34px 20px;
      font-size: 46px;
      color: #224066;
      text-align: left;
      font-weight: 200;
      @media only screen and (max-width: 425px) {
        font-size: 36px;
      }
      @media only screen and (max-width: 910px) {
        margin: 50px 0 34px 20px;
      }
    }
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
  padding: 0 0 100px 0;
  @media only screen and (max-width: 914px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 10px;
  }
`;
export const Card = styled.div`
  width: 33%;
  background: url(${varBg}) no-repeat 20px 50%;
  height: 390px;
  @media only screen and (max-width: 1142px) {
    width: 45%;
    margin: 10px 0;
  }

  @media only screen and (max-width: 914px) {
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
    margin: 30px -200px 30px 0;
  }
  @media only screen and (max-width: 582px) {
    width: 100%;
    margin: 30px -150px 30px 0;
  }
  @media only screen and (max-width: 530px) {
    width: 100%;
    margin: 30px -100px 30px 0;
  }
  @media only screen and (max-width: 478px) {
    width: 100%;
    margin: 30px -50px 30px 0;
  }
  @media only screen and (max-width: 478px) {
    width: 100%;
    margin: 30px 0 30px 0;
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
    margin: 30px 0 30px -35px;
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
    margin: 30px 0 30px -45px;
  }
`;

export const CardHeader = styled.div`
  h4 {
    font-size: 20px;
    margin: 0 20px 10px 40px;
    font-size: 20px;
    color: #224066;
    text-transform: capitalize;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const CardBody = styled.div`
  position: relative;

  img {
    @media only screen and (max-width: 425px) {
      width: 341px;
    }
  }
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
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  @media only screen and (max-width: 914px) {
    width: 50%;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    margin: 10px 0 0 0;
  }

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
    margin-top: 25px;
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

export const ChooseTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 832px){
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    a{
      margin: 0 0 20px 20px;
    }
  }
 
  span {
    background: #213a66;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 10px 15px;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
  }
  @media only screen and (max-width: 426px) {
    span {
      background: #213a66;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      padding: 10px 10px;
      text-align: center;
      margin-right: 10px;
      outline: none;
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 12px;
    }
  }
`;
