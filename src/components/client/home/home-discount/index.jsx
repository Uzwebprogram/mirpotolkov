import React from "react";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../../../style-App";
import HomeForm from "../home-form";
import { Section, FormWrap } from "./styled-index";

const HomeDiscount = ({isCount}) => {
    const [t, i18n] = useTranslation()
    const data = [1 , 2 , 3 , 4]
  return (
    <>
      <Section>
        <WrapperContainer>
          <h2>{t("HomeCount.0")}</h2>
          <p>{t("HomeCount.1")}</p>
          <FormWrap>
            <HomeForm isCount={isCount} />
          </FormWrap>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeDiscount;
