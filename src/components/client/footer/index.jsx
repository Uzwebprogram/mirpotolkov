import HeaderBottom from "../header/HeaderBottom/index";
import { Section, PrivacyPolicy } from "./styled-index";
import { WrapperContainer } from "../../../style-App";
import { NavLink } from "react-router-dom";
function Footer({isLogo}) {
  return (
    <>
      <Section id="contact">
        <WrapperContainer>
          <HeaderBottom logoWhite isLogo={isLogo} />
          <PrivacyPolicy>
            <a href="https://www.facebook.com/mirpotolkovvuz">
            <i class='bx bxl-facebook-circle'></i>
            </a>
            <a href="https://www.instagram.com/mirpotolkovuz/">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://t.me/mirpotolkov">
              <i class="bx bxl-telegram"></i>
            </a>
          </PrivacyPolicy>
        </WrapperContainer>
      </Section>
    </>
  );
}
export default Footer;
