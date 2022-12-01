import styled from "styled-components";
import blueBg from "../../../../assets/images/client/backgroundblue.png";
export const Section = styled.div`
  width: 100%;
  background: transparent url(${blueBg}) no-repeat scroll center center / cover;
  height: ${(props) => (props.calculator ? "0px" : "534px")} 534px;
  margin-top: -100px;
  z-index: 1;
  padding-bottom: 20px;
  @media only screen and (max-width: 1069px) {
    margin-top: -150px;
  }

  @media only screen and (max-width: 820px) {
    margin-top: -150px;
    background: transparent url(${blueBg}) no-repeat scroll center left / cover;
  }

  /* @media only screen and (max-width: 813px) {
    margin-top: -220px;
  } */

  div {
    h2 {
      font-size: 46px;
      color: #fff;
      text-align: left;
      padding: 120px 0 0 0;
      font-weight: 200;

      span {
        font-weight: bold;
      }

      @media only screen and (max-width: 820px) {
        font-size: 36px;
        padding: 178px 0 0 38px;
      }
    }
  }
`;

export const Note = styled.div`
  p {
    color: #fff;
    padding-right: 323px;

    @media only screen and (max-width: 1230px) {
      padding-left: 20px;
    }
    @media only screen and (max-width: 768px) {
      padding-right: 20px;
    }
    @media only screen and (max-width: 425px) {
      padding: 0 10px;
    }
    @media only screen and (max-width: 375px) {
      padding: 0 10px;
    }
  }
`;
