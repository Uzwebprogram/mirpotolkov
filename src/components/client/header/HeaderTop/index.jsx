import React from "react";
import { WrapperContainer } from "../../../../style-App";
import { NavList, Section, NavBar, SectionMobile } from "./styled-index";
import { NavLink } from "react-router-dom";
import HeaderLang from "../header-language/index";
import { useTranslation } from "react-i18next";
import Logo1 from "../../../../assets/images/client/logomir.png";
import { PhoneItem } from "../HeaderBottom/styled-index";
import phoneIcon from "../../../../assets/images/client/tel.png";

const HeaderTop = ({ HandleClick }) => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <Section>
        <WrapperContainer>
          <NavBar>
            <NavList>
              <li>
                <NavLink to="#">{t("Header.0")}</NavLink>
              </li>
              <li>
                <NavLink to="#">{t("Header.1")}</NavLink>
              </li>
              <li>
                <NavLink to="#">{t("Header.2")}</NavLink>
              </li>
              <li>
                <NavLink to="#">{t("Header.3")}</NavLink>
              </li>
              <li>
                <NavLink to="#">{t("Header.4")}</NavLink>
              </li>
              <li>
                <NavLink to="#">{t("Header.5")}</NavLink>
              </li>
              <li>
                <NavLink to="#">{t("Header.6")}</NavLink>
              </li>
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
          <img src={Logo1} width={200} height={50} alt="image" />
        </div>
        <PhoneItem
          style={{
            background: "#224066",
            borderRadius: "10px",
            padding: "3px 10px",
            marginRight: "20px",
          }}
        >
         
          <a href="tel:+99897750-11-33">
            +99897 <span>750-11-33</span>
          </a>
        </PhoneItem>
      </SectionMobile>
    </>
  );
};

export default HeaderTop;
