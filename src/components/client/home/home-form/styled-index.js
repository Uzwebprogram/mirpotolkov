import styled from "styled-components";

export const BlueLine = styled.div`
  background: #d4665c;
  height: 1px;
  width: 90%;
  margin: 60px 0;
  h3 {
    color: white;
    font-size: 60px;
    margin-top: 50px;
  }

  @media only screen and (max-width: 820px) {
    h3 {
      font-size: 30px;
      text-align: center;
    }
  }
`;
export const ButtonOk = styled.div`
  border: 8px solid #d78f88;
  color: #fff;
  background: #d4665c;
  border-radius: 31px;
  box-shadow: -2px 2px 20px 2px rgb(56 53 51 / 36%);
  cursor: pointer;
  display: block;
  font-size: 24px;
  text-align: center;
  padding: 8px 0px;
`;
export const FormCost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 820px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 40px;

    i {
      display: none;
    }
  }

  i {
    font-size: 50px;
    color: #fff;
    margin: 37px 0 0 0;
  }
`;

export const ButtonAdd = styled.button`
  border: none;
  border-radius: 50px;
  outline: none;
  padding: 15px;
  background: #d4665c;
  color: #fff;
  position: relative;
  bottom: 167px;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media only screen and (max-width: 820px) {
    width: 100%;
  }
  label {
    font-size: 22px;
    color: white;
    margin: 0 0 7px 10px;
  }

  input,
  select {
    border: none;
    outline: none;
    font-size: 12px;
    border-radius: 50px;
    padding: 10px 10px;
    border: 2px solid transparent;
    font-weight: bold;
    color: #224066;
    &:focus {
      border: 2px solid #d4665c;
    }

    @media only screen and (max-width: 820px) {
      width: 100%;
    }
  }

  input {
    @media only screen and (max-width: 820px) {
      width: 96.5%;
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
    @keyframes pulse-borde {
      0% {
        transform: translateX(-100%) translateY(-1%) translateZ(0);
        opacity: 1;
        box-shadow: 0px 0px 0px 0px rgba(212, 102, 92);
      }
      100% {
        transform: translateX(-100%) translateY(-1%) translateZ(0);
        opacity: 0;
        box-shadow: 0px 0px 0px 20px rgba(212, 102, 92);
      }
    }

    i {
      margin: 2px 0 0 20px;
      font-size: 25px;
      color: #fff;
    }
  }
`;
