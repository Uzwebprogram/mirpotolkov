import React, { useTransition } from "react";
import { WrapperContainer } from "../../../../style-App";
import { Section } from "./styled-index";
import HomeForm from "../home-form";
import { useTranslation } from "react-i18next";

const HomeCost = ({ isCost }) => {
  const [t, i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
          <h2>{t("HomeCost.0")}</h2>
          <HomeForm isCost={isCost} />
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeCost;
