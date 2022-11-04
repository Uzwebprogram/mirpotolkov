import styled from "styled-components";

export const Wrapper = styled.div`
div{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
button{
    background-color: #F67263;
    padding: 10px 50px;
    text-align: center;
    cursor: pointer;
    border: none;
    margin: 0 10px 10px 10px;
    color: white;
    border-radius: 20px;
}

select{
    display: flex;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-transform: uppercase;
    color: white;
    border: none;
    background: #F67263;
    padding: 15px 30px;
    margin:0 10px 20px 10px;
    cursor: pointer;
    border-radius:20px;
    outline: none;
    position: absolute;
    top: 10px;
    left: 43.5%;
  }
  select:nth-child(2){
    position: absolute;
    top: 10px;
    left: 23.5%;
  }
`
