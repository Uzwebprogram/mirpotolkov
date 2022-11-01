import styled from "styled-components";

export const HomeContent = styled.div`
 width: 55%;
margin: 50px 0 0 0;
  h2 {
    font-size: 68px;
    color: #fff;
    font-weight: bold;
    margin: 20px 0;
    
  }

  p {
    font-size: 24px;
    color: #000;
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
 p{
    color: #75613d;
    font-size: 24px;
    :nth-child(1){
        font-size: 13px;
        margin: 2px 0 0 10px;
    }
 }
`;

export const FormInBt = styled.div`
  display: flex;
  align-items: center;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50px;
    padding: 10px 10px;
    margin: 0 20px 0 0;
    border: 2px solid transparent;

    &:hover{
        border: 2px solid #d4665c;
    }

    input{
        border: none;
        outline: none;
        margin: 0 0 0 10px;
        font-size: 18px;
    }

    i{
        font-size: 22px;
        
    }
  }

  button{
    border: none;
    border-radius: 50px;
    outline: none;
    padding: 10px 10px 10px 35px;
    background: #d4665c;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;

    i{
        font-size: 25px;
        margin-left: 20px;
    }
  }
`;
