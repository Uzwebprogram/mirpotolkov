import styled from "styled-components";
import footer from "../../../assets/images/client/footer.svg";

export const Section = styled.div`
  width: 100%;
  padding-top: 197px;
  background: transparent url(${footer}) no-repeat scroll center top / cover;
  width: 100%;
  height: 250px;
  position: relative;
  z-index: 4;
  @media only screen and (max-width: 1242px) {
  height: 350px;
  }
`;

export const PrivacyPolicy = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 70px 0 0 0;
  padding: 10px;
  border-radius: 50px;

  @media only screen and (max-width: 1242px) {
    width: 90%;
    margin: 30px auto;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 30px;
    margin: 0 8px;
  }

  a:hover {
    text-decoration: underline;
  }
`;
export const Logo = styled.a`
  text-align: center;
  color: white;
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
`
