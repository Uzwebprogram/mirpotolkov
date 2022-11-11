import styled from "styled-components";

export const CardImage = styled.div`
  position: relative;
  img:nth-child(1) {
    /* width: 200px;
    height: 120px; */
    border-top-left-radius: 5px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 30px;
    background-color: white;
    /* position: absolute;
    top: 90px; */
  }
  img:nth-child(2) {
    width: 100px;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-top-left-radius: 5px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    position: absolute;
    bottom: 70px;
    left: -20px;
    background-color: white;

    @media only screen and (max-width: 1000px) {
      position: absolute;
      bottom: 140px;
      left: -20px;
    }
    @media only screen and (max-width: 475px) {
      position: absolute;
      bottom: 140px;
      left: -10px;
    }
  }
  @media only screen and (max-width: 470px) {
    font-size: 36px;
    padding-left: 40px;
  }
`;

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
  width: 100%;

  @media only screen and (max-width: 1000px) {
    display: flex;
    align-items: top;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 590px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const AdvantageCard = styled.div`
  width: 23%;
  padding: 0 10px;
  @media only screen and (max-width: 1000px) {
    width: 45%;
    margin: 20px 0;
  }
  @media only screen and (max-width: 667px) {
    width: 50%;
    margin: 50px 0;
    /* padding: 0 50px; */
  }
  @media only screen and (max-width: 475px) {
    width: 90%;
    margin: 40px 0;
    /* padding: 0 30px; */
  }

  img {
    width: 100%;
    height: 151px;

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
      height: 170px;
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
