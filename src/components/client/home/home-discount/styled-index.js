import styled from "styled-components";
import jeltBg from "../../../../assets/images/client/jelt.png";
export const Section = styled.div`
  width: 100%;
  position: relative;
  z-index: 4;
  background: transparent url(${jeltBg}) no-repeat scroll center top / cover;
  height: 1000px;
  div {
    h2 {
      padding: 160px 0 0 0;
      max-width: 690px;
      font-size: 60px;
      color: #224066;
      font-weight: 200;
    }
    p {
      color: #6b6836;
      font-size: 20px;
    }
  }
`;

export const FormWrap = styled.div`
  margin: 0 0 -50px 0;
`;
