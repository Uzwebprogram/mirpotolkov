import styled from "styled-components";

export const HomeContent = styled.div`
  width: 60%;
  margin: 50px 0 0 0;
  @media only screen and (max-width: 1042px) {
    padding: 0 40px;
  }
  @media only screen and (max-width: 996px) {
    padding: 0 40px;
  }
  @media only screen and (max-width: 768px) {
    width: 75%;
    padding: 0 20px;
  }
  h2 {
    font-size: 60px;
    color: #fff;
    font-weight: bold;
    margin: 20px 0;
    text-shadow: 2px 0 rgb(34,64,102), -2px 0 rgb(34,64,102), 0 2px rgb(34,64,102), 0 -2px rgb(34,64,102),
             1px 1px rgb(34,64,102), -1px -1px rgb(34,64,102), 1px -1px rgb(34,64,102), -1px 1px rgb(34,64,102);
    margin-bottom: 100px;
    margin-top: 180px ;
    padding-left: 110px;
    @media only screen and (max-width: 768px) {
      font-size: 50px;
    }

    @media only screen and (max-width: 590px) {
      font-size: 40px;
    }

    @media only screen and (max-width: 425px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 24px;
    color: #000;
    text-shadow: 1px 0 white, -1px 0 white, 0 1px white, 0 -1px white,
             1px 1px white, -1px -1px white, 1px -1px white, -1px 1px white;
    @media only screen and (max-width: 750px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 590px) {
      font-size: 18px;
    }
    span {
      font-weight: bold;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const FormP = styled.div`
  p {
    color: #75613d;
    font-size: 24px;
    @media only screen and (max-width: 750px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 590px) {
      font-size: 16px;
    }
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
      color: #000;
    }
    :nth-child(1) {
      font-size: 13px;
      margin: 2px 0 0 10px;

      @media only screen and (max-width: 750px) {
        display: none;
      }
    }
  }
`;

export const FormInBt = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 750px) {
    display: none;
  }

  button {
    border: none;
    border-radius: 50px;
    outline: none;
    padding: 7px 7px 7px 35px;
    background: #d4665c;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    width: 100%;
    margin-left: 20px;
    border: 8px solid #d78f88;
    box-shadow: -2px 2px 20px 2px rgb(56 53 51 / 36%);
    i {
      font-size: 25px;
      margin-left: 20px;
    }
  }
`;
