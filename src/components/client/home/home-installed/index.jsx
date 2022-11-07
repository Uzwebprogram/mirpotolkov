import React from "react";
import { WrapperContainer } from "../../../../style-App";
import { Section, Next } from "./styled-index";
import { NavLink } from "react-router-dom";
import CardInstall from "./cardInstall";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const HomeInstalled = () => {
  const [t, i18n] = useTranslation()
  const [visible , setVisible] = useState(2);

  const HandleClick = () =>{
    setVisible((preventValue) => preventValue + 2)
  }
  return (
    <>
      <Section id="HomeInstalled">
        <WrapperContainer>
          <h2>{t("HomeInstall.0")}</h2>
          <CardInstall visible={visible} />
          <Next>
            <div>
              <button onClick={HandleClick}>
                <i class="bx bx-down-arrow-circle"></i>{t("HomeInstall.1")}
              </button>
            </div>
          </Next>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeInstalled;
