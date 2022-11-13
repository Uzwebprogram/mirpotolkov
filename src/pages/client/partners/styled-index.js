import styled from "styled-components";

export const WrapperTop = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width : 1040px) {
        margin-top: 0px;
    }
    h2{
        font-weight: 200;
    font-family: sans-serif;
    color: #224066;
    font-weight: bold;
    font-size: 66px;
    padding-top: 20px;
    @media only screen and (max-width : 512px) {
    font-size: 36px;
    padding-top: 68px;
    padding-right:20px;
    }
    @media only screen and (max-width : 1040px) {
    padding-right:20px;
    }
}
`