import React from "react";
import { WrapperContainer } from "../../../../style-App";
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
} from "./styled-index";
import potolog from "../../../../assets/images/client/potolog.jpg";
import { StretchContext } from "../../../../context/client/stretch_ceilings/context";
import { useTranslation } from "react-i18next";


const HomeCeiling = () => {
  const {StretchMap} = useContext(StretchContext)
  const {t , i18n} = useTranslation();
  function ValueLang() {
    return window.localStorage.getItem("i18nextLng")
  }
  return (
    <>
      <Section>
        <WrapperContainer>
          <CeilCardWrapper>
            <h2><span>{t("celing.0")}</span>{t("celing.1")}</h2>
            <CeilCard>
              {StretchMap.map((elem , index) => (
                <CeilItem key={index}>
                  {ValueLang() == "ru" ? <h4>{elem.titleru}</h4> : ValueLang() == "uz" ? <h4>{elem.titleuz}</h4>:  ValueLang() == "en" ? <h4>{elem.titleen}</h4>:null}
                  
                  <img src={`https://mebel-b.herokuapp.com/static/${elem.image}`} width={247} height={173} alt="images" />
                  <Discount>
                    <DiscountItem>
                      <p>
                      {t("celing.2")} {elem.skidka}
                        <br />
                        <span>
                        {elem.money} {t("celing.3")} <sup>2</sup>
                        </span>
                      </p>
                    </DiscountItem>
                    <DiscountItem>
                      <i class="bx bxs-check-shield"></i>
                      <p>
                        <span>30 {t("celing.4")}</span> <br />
                         {t("celing.5")}
                      </p>
                    </DiscountItem>
                  </Discount>
                  <LeftBlock>
                    <p>{t("celing.6")}</p>
                    <Line></Line>
                    <p>{t("celing.7")} {elem.shades} {t("celing.8")} </p>
                  </LeftBlock>
                  <button>
                    {t("celing.9")} <i class="bx bx-right-arrow-circle"></i>
                  </button>
                </CeilItem>
              ))}
            </CeilCard>
          </CeilCardWrapper>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeCeiling;
