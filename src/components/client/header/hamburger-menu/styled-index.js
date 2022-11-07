import styled from "styled-components";

export const Wrapper = styled.div`
    display: none;
 @media only screen and (max-width : 768px) {
    position: fixed;
    display: flex;
    width: 80%;
    height: 100%;
    background: white;
    flex-direction: column;
    padding: 10px;
    left: -650px;
    transition: 1s;
    z-index: 1000;
    top: 0;
    select{
        background-color: transparent;
        color: black;
        padding: 6px 8px;
        cursor: pointer;
        width: 78px;
        margin-bottom: 26px;
    }
    select option{
        background-color: white;
    }
    span{
        cursor: pointer;
        font-size: 34px;
        color: black;
        margin-left: auto;
    }
    ul{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
    ul li {
        list-style-type: none;
        margin-top: 10px;
        margin-bottom: 10px;

    }
    hr{
        border: transparent;
        width: 100%;
        background-color:#737373;
        height: 1px;
        margin-left: 0;
        opacity: 0.3;
    }
    hr:nth-child(14){
        display: none;
    }
    ul li a{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        text-transform: uppercase;
        color: black;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    a:nth-child(4){
        background: #d4665c;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;
        color: #fff;
        padding-top: 18px;
        padding-bottom: 19px;
        text-align: center;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
 }
`   