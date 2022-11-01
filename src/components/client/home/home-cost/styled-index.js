import styled from "styled-components";
import blueBg from "../../../../assets/images/client/blue.png";
export const Section = styled.div`
  width: 100%;
  background: transparent url(${blueBg}) no-repeat scroll center top / cover;
  height: 594px;
  margin-top: -100px;
  z-index: 1;

  div {
    h2 {
      font-size: 46px;
      color: #fff;
      text-align: left;
      padding: 120px 0 0 0;
      font-weight: 200;

      span{
        font-weight: bold;
      }
    }
  }
`;
