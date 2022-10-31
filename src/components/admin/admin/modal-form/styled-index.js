import styled from "styled-components";

export const Wrapper =styled.div`
  button{
    display: flex;
    margin-left: auto;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-transform: uppercase;
    color: white;
    background: #F67263;
    padding: 23px 42px;
    margin-bottom: 20px;
    cursor: pointer;
    border: none;
    border-radius: 25px;
  }

  
`
export const ModalTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    span:nth-child(1){
        font-family: sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        color: black;
        margin-left: 20px;
    }
    span:nth-child(2){
        font-family: sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 38px;
        line-height: 22px;
        color: black;
        margin-left: 20px;
        cursor: pointer;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding:20px;
    .error{
        color: red;
        margin-top: 5px;
        font-size: 14px;
        display: none;
    }
    input{
        border-top: transparent;
        border-left: transparent;
        border-right: transparent;
        height: 50px;
        outline: transparent;
    }
    button{
        margin-top: 40px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        text-transform: uppercase;
        color: #1B1B1B;
        background: #F67263;
        padding: 23px 0px;
        border: transparent;
        cursor: pointer;
        border-radius: 20px;
        color: white;
    }
`