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
import PartnersCard from "./partnersCard";
// import { RegionContext } from "../../../context/client/region/context";
import { useTranslation } from "react-i18next";
import ModalPhone from "../Modal";
import { RegionContext } from "../../../context/client/region/context";
const card = [1, 2, 3, 4];

const PartnerCard = () => {
  // const {StretchMap} = useContext(StretchContext)
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
        {RegionMap.map(elem => (
           <PartnersCard Element={elem} key={elem.id}/>
        ))}
        </WrapperContainer>
      </Section>
    </>
  );
};

export default PartnerCard;
