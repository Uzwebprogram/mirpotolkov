import React from "react";
import { WrapperContainer } from "../../../../style-App";
import { NavList, Section, NavBar } from "./styled-index";
import { NavLink } from "react-router-dom";
import HeaderLang from "../header-language/index";
import { useTranslation } from "react-i18next";


const HeaderTop = () => {

  const [t, i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
          <NavBar>
            <NavList>
              <li>
                <NavLink to='#'>{t("Header.0")}</NavLink>
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
    </>
  );
};

export default HeaderTop;
