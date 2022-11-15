import React from "react";
import { WrapperContainer } from "../../../../style-App";
import {
  NavList,
  Section,
  NavBar,
  SectionMobile,
  PhoneItem,
} from "./styled-index";
import { NavLink } from "react-router-dom";
import HeaderLang from "../header-language/index";
import { useTranslation } from "react-i18next";
import Logo1 from "../../../../assets/images/client/logomir.png";
import { useNavigate } from "react-router-dom";

import Logo from "../../../../assets/images/client/logomir.png"
import LogoWhite from "../../../../assets/images/admin/logo.png"
const HeaderTop = ({ HandleClick, logoWhite }) => {

import { useContext } from "react";
import { RegionContext } from "../../../../context/client/region/context";
const HeaderTop = ({ HandleClick }) => {

  const [t, i18n] = useTranslation();
  const {RegionMap} = useContext(RegionContext)
  const handleLang = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  const navigate = useNavigate();
  const HandleClickMore = () => {
    navigate("/partners");
  };
  return (
    <>
      <Section>
        <WrapperContainer>
          <NavBar>
            <NavList>
              <li>
                <a href="/">
                    {logoWhite ? (
                      <img src={LogoWhite} width={200} height={50} alt="" />
                    ) : (
                      <img src={Logo} width={180} height={30} alt="" />
                    )}
                </a>
              </li>
              <li>
                <a href="#calculator">{t("Header.1")}</a>
              </li>
              <li>
                <a href="#Advantage">{t("Header.2")}</a>
              </li>
              <li>
                <a href="#choose" to="#">
                  {t("Header.3")}
                </a>
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
                  <span onClick={HandleClickMore}>Ташкент</span>
                  <span>Сирдарё</span>
                  <span>Бухара</span>

   
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
                  <a href="#choose" to="#">
                    {t("Header.3")}
                  </a>
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
                    {RegionMap.map((elem , index) =>
                    LanguValue() === "uz" ?<button value={elem.id} key={index} onClick={HandleClickMore}>{elem.region_name_uz}</button>
                    :LanguValue() === "ru" ? <button value={elem.id} key={index} onClick={HandleClickMore}>{elem.region_name_ru}</button>:LanguValue() === "en" ? <button value={elem.id} key={index} onClick={HandleClickMore}>{elem.region_name_en}</button>:null)}
                  </div>

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
          <img src={Logo1} width={200} height={50} alt="image" />
        </div>
        <PhoneItem
          style={{
            borderRadius: "10px",
            padding: "3px 10px",
            marginRight: "15px",
          }}
        >
          <a
            class="neon"
            href="tel:+99897750-11-33"
            style={{
              background: "#224066",
              borderRadius: "10px",
              padding: "3px 10px",
              marginRight: " 15px",
            }}
          >
            <i class="bx bxs-phone-call"></i>
          </a>

          <select
            onChange={handleLang}
            style={{
              background: "#224066",
              borderRadius: "10px",
              padding: "3px 10px",
            }}
          >
            {LanguValue() === "ru" ? (
              <>
                <option value="ru">RUS</option>
                <option value="uz">UZB</option>
                <option value="en">ENG</option>
              </>
            ) : LanguValue() === "uz" ? (
              <>
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
                <option value="en">ENG</option>
              </>
            ) : LanguValue() === "en" ? (
              <>
                <option value="en">ENG</option>
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
              </>
            ) : (
              <>
                <option value="ru">RUS</option>
                <option value="en">ENG</option>
                <option value="uz">UZB</option>
              </>
            )}
          </select>
        </PhoneItem>
      </SectionMobile>
    </>
  );
};

export default HeaderTop;
