import React from "react";
import {
  WrapperNavBtm,
  LogoItem,
  LocalItem,
  PhoneItem,
  LinkItem,
} from "./styled-index";
import localIcon from "../../../../assets/images/client/point.png";
import phoneIcon from "../../../../assets/images/client/tel.png";
import { useTranslation } from "react-i18next";

const HeaderBottom = ({isLocal}) => {
  const [t, i18n] = useTranslation()
  return (
    <>
      <WrapperNavBtm>
        <LogoItem>
          <h1>Logotip</h1>
        </LogoItem>
        <LocalItem>
          <img src={localIcon} alt="image" />
         {isLocal ?  <p>{t("Header.7")}</p> :  <p>{t("Header.9")}</p>}
        </LocalItem>
        <PhoneItem>
          <img src={phoneIcon} alt="image" />
          <a href="tel:+99897750-11-33">+99897 <span>750-11-33</span></a>
        </PhoneItem>
        <LinkItem>
          <button>
          {t("Header.8")}
            <i class='bx bx-right-arrow-circle'></i>
          </button>
        </LinkItem>
      </WrapperNavBtm>
    </>
  );
};

export default HeaderBottom;
