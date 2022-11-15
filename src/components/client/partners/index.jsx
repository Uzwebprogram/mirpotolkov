import React from "react";
import { WrapperContainer } from "../../../style-App";
import { useContext } from "react";
import {
  Section,
  CeilCardWrapper,
  CeilCard,
  CeilItem,
  Discount,
  DiscountItem,
  Line,
  LeftBlock,
  WrapperUser
} from "./styled-index";
import { StretchContext } from "../../../context/client/stretch_ceilings/context";
import { useTranslation } from "react-i18next";
import ModalPhone from "../Modal";
import { RegionContext } from "../../../context/client/region/context";
const card = [1, 2, 3, 4];

const PartnerCard = () => {
  const {StretchMap} = useContext(StretchContext)
  const {RegionMap} = useContext(RegionContext)
  const [t,i18n] = useTranslation()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function ValueLang() {
    return window.localStorage.getItem("i18nextLng")
  }
  return (
    <>
      <Section>
      <ModalPhone open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        <WrapperContainer>
          <CeilCardWrapper>
            <CeilCard>
              {StretchMap.map((elem , index) => (
                <CeilItem key={index}>
                  <h4>3Д Потолок</h4>
                  
                  <img src={`https://api.mirpotolkov.uz/static/${elem.image}`} width={247} height={173} alt="images" />
                  
                  <WrapperUser>
                    <img src={"https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1"} alt="" />
                    <span>Алиса Иванова</span>
                  </WrapperUser>

                  <a href="tel:+998915039390" >
                    +99891-503-93-90 <i class='bx bxs-phone-call'></i>
                  </a>
                </CeilItem>
              ))}
            </CeilCard>
          </CeilCardWrapper>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default PartnerCard;
