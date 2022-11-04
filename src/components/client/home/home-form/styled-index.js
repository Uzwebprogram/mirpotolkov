import styled from "styled-components";

export const BlueLine = styled.div`
  background: #d4665c;
  height: 1px;
  width: 90%;
  margin: 60px 0;
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

export const ButtonAdd = styled.button`
    border: none;
    border-radius: 50px;
    outline: none;
    padding: 15px;
    margin-top: 15px;
    display: flex;
    margin-left: auto;
    background: #d4665c;
    color: #fff;
`

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

  input{
    @media only screen and (max-width: 820px) {
      width: 96.5%;
    }
  }
`;
