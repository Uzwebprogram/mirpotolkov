import React from "react";
import HeaderBottom from "../../header/HeaderBottom";
import { WrapperContainer } from "../../../../style-App";
import { Section } from "../../header/styled-index";
import Header from "../../header";
import { HomeContent } from "./styled-index";
import HomeForm from "../home-form";
import { useTranslation } from "react-i18next";

const HomeHero = ({isText}) => {
  const [t, i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
          <HeaderBottom isLocal={true} />
          <HomeContent>
            <h2>
             {t("Home.0")}
            </h2>
            <p>
              <span>
              {t("Home.1")}
              </span>
              {t("Home.2")}
            </p>
           <HomeForm isText={isText}/>
          </HomeContent>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeHero;
