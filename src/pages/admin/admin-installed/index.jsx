import React from "react";
import { WrapperContainer } from "../../../style-App";
import { Section, Next } from "./styled-index";
import { NavLink } from "react-router-dom";
import CardInstall from "./CardInstall";
import { useTranslation } from "react-i18next";

const AdminInstalled = () => {
  const [t, i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
          <CardInstall />
        </WrapperContainer>
      </Section>
    </>
  );
};

export default AdminInstalled;
