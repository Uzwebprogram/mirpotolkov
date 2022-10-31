import styled from "styled-components";

export const WrapperNavBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoItem = styled.div`
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
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
    

    span{
      font-weight: bold;
      font-size: 30px;
    }
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
    padding: 10px 10px 10px 35px;
    border: none;
    outline: none;
    background: #d4665c;
    color: #fff;
    border-radius: 50px;
    font-weight: 500;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    i {
      margin: 2px 0 0 20px;
      font-size: 25px;
      color: #fff;
    }
  }
`;
