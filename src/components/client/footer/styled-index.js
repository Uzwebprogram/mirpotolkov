import styled from "styled-components";
import footer from "../../../assets/images/client/footer.png";

export const Section = styled.div`
  width: 100%;
  padding-top: 87px;
  background: transparent url(${footer}) no-repeat scroll center top / cover;
  width: 100%;
  height: 250px;
  position: relative;
  z-index: 4;
`;

export const PrivacyPolicy = styled.div`
  width: 100%;
  background: #2b313f;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 70px 0 0 0;
  padding: 10px;
  border-radius: 50px;
  z-index: 10000;

  @media only screen and (max-width: 1242px) {
    width: 90%;
    
    margin: 30px auto;
  }

  a {
    color: #337ab7;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
