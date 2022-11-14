import { style } from "@mui/system";
import styled from "styled-components";
import grayBg from "../../../../assets/images/client/sery.png";

export const Section = styled.div`
  width: 100%;
  margin-bottom: -150px;
  padding: 50px 0;
  height: 700px;
  /* background: transparent url(${grayBg}) no-repeat scroll center top / cover; */
  /* position: relative;
  z-index: 1; */

  h2 {
    font-size: 46px;
    color: #224066;
    text-align: center;
    margin: 0 0 20px 0;
    font-weight: 200;

    @media only screen and (max-width: 430px) {
      font-size: 36px;
    }
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
`;
