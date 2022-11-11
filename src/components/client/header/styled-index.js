import styled from "styled-components";
import headerBg from "../../../assets/images/client/header.jpg";

export const WrapperHero = styled.div`
  background-color: #999;
`;

export const Section = styled.div`
  width: 100%;
  padding: 50px 0 120px 0;
  background-image: url(${headerBg});
  background-position: center -20px;
  background-repeat: no-repeat;
  background-size: cover;


  @media only screen and (max-width: 320px) {
    width: 100%;
    padding: 50px 0 120px 0;
    background-image: url(${headerBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -650px -38px !important;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 100%;
    padding: 50px 0 120px 0;
    background-image: url(${headerBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -535px -38px;
  }
`;
