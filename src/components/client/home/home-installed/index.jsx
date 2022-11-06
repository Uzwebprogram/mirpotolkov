import React from "react";
import { WrapperContainer } from "../../../../style-App";
import { Section, Next } from "./styled-index";
import { NavLink } from "react-router-dom";
import CardInstall from "./cardInstall";
import { useTranslation } from "react-i18next";

const HomeInstalled = () => {
  const [t, i18n] = useTranslation()
  return (
    <>
      <Section id="HomeInstalled">
        <WrapperContainer>
          <h2>{t("HomeInstall.0")}</h2>
          <CardInstall />
          <Next>
            <div>
              <NavLink to="#">
                <i class="bx bx-down-arrow-circle"></i>{t("HomeInstall.1")}
              </NavLink>
            </div>
          </Next>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeInstalled;
