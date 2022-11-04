import styled from "styled-components";

export const WrapperNavBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1042px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0 0 0;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0 0 0;
  }

  @media only screen and (max-width: 680px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 90%;
    margin: 20px 0 0 20px;
  }
`;

export const LogoItem = styled.div`
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 1042px) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const LocalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #fff;
    margin: 0 7px;
    font-size: 18px;

    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
export const PhoneItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 7px;
    font-weight: bold;
    font-size: 20px;

    span {
      font-weight: bold;
      font-size: 30px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 14px;
      span {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 680px) {
    margin: 10px 0;
  }
`;
export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 7px 7px 35px;
    border: none;
    outline: none;
    background: #d4665c;
    color: #fff;
    border-radius: 50px;
    font-weight: 500;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border: 8px solid #d78f88;
    box-shadow: -2px 2px 20px 2px rgb(56 53 51 / 36%);

    i {
      margin: 2px 0 0 20px;
      font-size: 25px;
      color: #fff;
    }
  }
`;
