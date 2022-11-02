import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  padding: 0 0 180px 0;

  div {
    h2 {
      font-size: 46px;
      color: #224066;
      font-weight: 200;

      @media only screen and (max-width: 1000px) {
        padding-left: 40px;
      }
      @media only screen and (max-width: 470px) {
        font-size: 36px;
        padding-left: 40px;
      }

      span {
        font-weight: bold;
      }
    }
  }
`;

export const AdvantageCardWrapper = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 1000px) {
    display: flex;
    align-items: top;
    justify-content: space-evenly;
  }
`;

export const AdvantageCard = styled.div`
  width: 23%;
  padding: 0 10px;

  @media only screen and (max-width: 1000px) {
    width: 35%;
  }
  @media only screen and (max-width: 470px) {
    width: 100%;
    margin: 10px 0;
    padding: 0 50px;
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
    margin: 10px 0;
    /* padding: 0 30px; */
  }

  img {
    width: 100%;

    @media only screen and (max-width: 1000px) {
      width: 100%;
      height: 200px;
    }
    @media only screen and (max-width: 595px) {
      width: 100%;
      /* height: 172px; */
    }
    @media only screen and (max-width: 470px) {
      width: 100%;
      /* height: 172px; */
    }
    @media only screen and (max-width: 375px) {
      width: 100%;
      /* height: 172px; */
    }
  }

  p {
    margin: 10px 40px 0 25px;
    font-size: 18px;
    font-weight: bold;
    color: #224066;

    @media only screen and (max-width: 470px) {
      margin: 10px 0 0 0;
    }
  }
`;
