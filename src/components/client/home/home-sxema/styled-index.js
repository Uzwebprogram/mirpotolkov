import styled from "styled-components";

export const Section = styled.div`
  width: 100%;

  div {
    h2 {
      margin-top: 40px;
      font-size: 46px;
      color: #20262b;
      text-align: left;
      margin-bottom: 34px;
      font-weight: 200;
      @media only screen and (max-width: 976px) {
        padding: 0 20px;
      }

      @media only screen and (max-width: 430px) {
        font-size: 36px;
      }
    }
  }
`;

export const CardSxemaWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 976px) {
    display: flex;
    align-items: top;
    justify-content: space-around;
  }

  @media only screen and (max-width: 430px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const CardSxema = styled.div`
  width: 211px;
  img{
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-top-left-radius: 5px  ;
    border-top-right-radius: 30px  ;
    border-bottom-right-radius: 30px  ;
    border-bottom-left-radius: 30px  ;
    background-color: white;
  }
  @media only screen and (max-width: 840px) {
    width: 45%;
  }

  @media only screen and (max-width: 430px) {
    width: 90%;
    margin: 10px 0;
  }

  p {
    font-size: 20px;
    color: #224066;
    float: left;
    width: 90%;
  }
`;
