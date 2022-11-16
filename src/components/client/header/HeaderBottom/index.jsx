import React from "react";
import {
  WrapperNavBtm,
  LogoItem,
  LocalItem,
  PhoneItem,
  LinkItem,
} from "./styled-index";
import localIcon from "../../../../assets/images/client/point.svg";
import localIconWhite from "../../../../assets/images/client/point.png";
import phoneIcon from "../../../../assets/images/client/tel.svg";
import phoneIconWhite from "../../../../assets/images/client/tel.png";
import Logo from "../../../../assets/images/client/logomir.png"
import LogoWhite from "../../../../assets/images/admin/logo.png"
import { useTranslation } from "react-i18next";
import ModalPhone from "../../Modal";

const HeaderBottom = ({ isLocal , logoWhite, isLogo }) => {
  const [t, i18n] = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ModalPhone open={open} setOpen={setOpen} handleClose={handleClose} />
      <WrapperNavBtm>
       {isLogo ? (
         <LogoItem>
         {logoWhite ? <img src={LogoWhite} width={200} height={70} alt="" />:<img src={Logo} width={210} height={40} alt="" />}
       </LogoItem>
       ): null}
        <LocalItem>
          
          {isLocal ?  <img src={localIcon} alt="imager" />: <img src={localIconWhite} alt="images" />}
          {isLocal ?  <p >{t("Header.7")}</p> : <p style={{color:"white"}}>{t("Header.9")}</p>}
        </LocalItem>
        <PhoneItem>
          
          {isLocal ?  <img src={phoneIcon} alt="images" />: <img src={phoneIconWhite  } alt="images" />}
      {logoWhite ?           <a href="tel:+99897750-11-33" style={{color:"white"}}>
            +99897 <span>750-11-33</span>
          </a>:           <a href="tel:+99897750-11-33">
            +99897 <span>750-11-33</span>
          </a>}
        </PhoneItem>
        <LinkItem>
          <button onClick={handleOpen}>
            {t("Header.8")}
            <i class="bx bx-right-arrow-circle"></i>
          </button>
        </LinkItem>
      </WrapperNavBtm>
    </>
  );
};

export default HeaderBottom;
