import styled from "styled-components";

export const BlueLine = styled.div`
  background: #46a4e9;
  height: 1px;
  width: 90%;
  margin-bottom: 34px;
  h3{
    color: white;
    font-size: 60px;
  }
  
  @media only screen and (max-width: 820px) {
    h3{
    font-size: 30px;
    text-align: center;
  }
  }
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

export const FormGroup = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (max-width: 820px) {
    width: 100%;
  }

  label {
    font-size: 22px;
    color: #213a66;
    margin: 0 0 7px 10px;
  }

  input,
  select {
    border: none;
    outline: none;
    font-size: 18px;
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

  input{
    @media only screen and (max-width: 820px) {
      width: 96.5%;
    }
  }
`;
