import styled from "styled-components";

export const Wrapper = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
width: 100%;
bottom: 0;
z-index: 100;
a:nth-child(1){
   background-color: #d4665c ;
   margin-bottom: 40px;
   margin-left: 40px;
   width: 80px;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   transform: all .5s ease;
   box-shadow: 0px 0px 20px rgba(0, 0, 0,0.15);
   @media only  screen and (max-width:768px) {
   margin-left: 10px;
   width: 60px;
   height: 60px;
    }
   ::before{
    content: "";
    position: absolute;
    z-index: -1;
    left: 7.8%;
    right: 50%;
    transform: translateX(-40%) translateX(-50%);
    display: block;
    width: 80px;
    height: 80px;
    background-color: #d78f88;
    border-radius: 50%;
    -webkit-animation: pulse-border 1500ms ease-out infinite;
    animation: pulse-border 1500ms ease-out infinite;
    @media only  screen and (max-width:768px) {
    width: 70px;
    height: 70px;
    left: 17.5%;
    }
    @media only  screen and (max-width:376px) {
    left: 20%;
    }
   }
   :focus{
    border: none;
    outline: none;
   }
   @keyframes pulse-border {
        0%{transform: translateX(-100%) translateY(-1%) translateZ(0) scale(1); opacity:1;}
        100%{transform: translateX(-100%) translateY(-1%) translateZ(0) scale(1.5); opacity:0;}
   }
}
a:nth-child(2){
   background-color: #224066;
   margin-bottom: 40px;
   margin-right: 40px;
   width: 80px;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   @media only  screen and (max-width:768px) {
   margin-right: 10px;
   width: 60px;
   height: 60px;
   }
   ::before{
    content: "";
    position: absolute;
    z-index: -1;
    right: -2.5%;
    transform: translateX(-50%) translateX(-50%);
    display: block;
    width: 80px;
    height: 80px;
    background-color: #4a71a3;
    border-radius: 50%;
    -webkit-animation: pulse-border 1500ms ease-out infinite;
    animation: pulse-border 1500ms ease-out infinite;
    @media only  screen and (max-width:768px) {
    width: 70px;
    height: 70px;
    right: -15%;
    }
    @media only  screen and (max-width:376px) {
    right: -17%;
    }
   }
   :focus{
    border: none;
    outline: none;
   }
   @keyframes pulse-border {
        0%{transform: translateX(-100%) translateY(-1%) translateZ(0) scale(1); opacity:1;}
        100%{transform: translateX(-100%) translateY(-1%) translateZ(0) scale(1.5); opacity:0;}
   }
}

`