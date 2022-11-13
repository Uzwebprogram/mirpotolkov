import React from "react";
import { WrapperContainer } from "../../../../style-App";
import { NavList, Section, NavBar, SectionMobile , PhoneItem} from "./styled-index";
import { NavLink } from "react-router-dom";
import HeaderLang from "../header-language/index";
import { useTranslation } from "react-i18next";
import Logo1 from "../../../../assets/images/client/logomir.png";
import { useNavigate } from "react-router-dom";
const HeaderTop = ({ HandleClick }) => {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const HandleClickMore = () => {
    navigate("/partners")
  }
  return (
    <>
      <Section>
        <WrapperContainer>
          <NavBar>
            <NavList>
              
              <li>
                <a href="#calculator">{t("Header.1")}</a>
              </li>
              <li>
                <a href="#Advantage">{t("Header.2")}</a>
              </li>
              <li>
                <a href="#choose" to="#">{t("Header.3")}</a>
              </li>
              <li>
                <a href="#HomeInstalled">{t("Header.4")}</a>
              </li>
              <li>
                <a href="#HomeSxema">{t("Header.5")}</a>
              </li>
              <li>
                <a href="#contact">{t("Header.6")}</a>
              </li>
              <div class="dropdown">
                <button class="dropbtn">{t("Header.10")}</button>
                <div class="dropdown-content">
                  <span  onClick={HandleClickMore}>Ташкент</span>
                  <span>Сирдарё</span>
                  <span>Бухара</span>
                </div>
              </div>
            </NavList>
            <HeaderLang />
          </NavBar>
        </WrapperContainer>
      </Section>
      <SectionMobile>
        <div>
          <button onClick={HandleClick}>
            <i class="bx bx-menu-alt-left"></i>
          </button>
          <img src={Logo1}  alt="image" />
        </div>
        <PhoneItem
          style={{
            background: "#224066",
            borderRadius: "10px",
            padding: "3px 10px",
            marginRight: "20px",
          }}
        >
          <a class="neon" href="tel:+99897750-11-33">
            +99897 <span>750-11-33</span>
          </a>
        </PhoneItem>
      </SectionMobile>
    </>
  );
};

export default HeaderTop;
