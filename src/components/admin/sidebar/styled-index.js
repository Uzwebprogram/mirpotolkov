import styled from "styled-components";


export const Wrapper = styled.div`
background-color: white;
width: 23%;
padding: 33px 20px;
transition: 0.5s;
height: 90vh;
`
export const WrapperTop = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    img:nth-child(1){
        margin-right: 80px;
    }

`
export const WrapperList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-top: 56px;
    position: fixed;
    span{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #06152B;
        opacity: 0.6;
        margin-left: 20px;
        transition: 0.5s;
    }
`
export const Profile = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    img{
        border-radius: 12px;
    }
    button{
        background-color: white;
        border: transparent;
        cursor: pointer;
    }
`
export const ProfileTitle = styled.div`
    margin-left: 10px;
    p{
    margin: 0;
    padding: 0;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12.64px;
    line-height: 16px;
    color: #06152B;
    transition: 1s;
}
span{
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    color: #06152B;
    opacity: 0.5;
    transition: 1s;
}
`
export const WrapperItem = styled.div`

`