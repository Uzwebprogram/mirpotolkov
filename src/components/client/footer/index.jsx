import HeaderBottom from "../header/HeaderBottom/index";
import { Section, PrivacyPolicy } from "./styled-index";
import { WrapperContainer } from "../../../style-App";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <Section id="contact">
        <WrapperContainer>
          <HeaderBottom />
          <PrivacyPolicy>
            <NavLink to="#">Политика конфиденциальности</NavLink>
          </PrivacyPolicy>
        </WrapperContainer>
      </Section>
    </>
  );
}
export default Footer;
