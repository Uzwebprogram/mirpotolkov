import styled from "styled-components";
import headerBg from '../../../assets/images/client/header.jpg'

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


  @media only screen and (max-width: 768px) {
    
    
  }
`;
