import React from "react";
import { WrapperContainer } from "../../../../style-App";
import {Section, CardSxemaWrapper, CardSxema} from './styled-index'
import shema from "../../../../assets/images/client/shema.png";
import shema2 from "../../../../assets/images/client/shema2.png";
import shema3 from "../../../../assets/images/client/shema3.png";
import shema4 from "../../../../assets/images/client/shema4.png";
import { useTranslation } from "react-i18next";
const HomeSxema = () => {
    const [t, i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
          <h2>{t("HomeSxema.0")}</h2>
          <CardSxemaWrapper>
            <CardSxema>
              <img src={shema} alt="image" />
              <p>{t("HomeSxema.1")}</p>
            </CardSxema>
            <CardSxema>
              <img src={shema2} alt="image" />
              <p>{t("HomeSxema.2")}</p>
            </CardSxema>
            <CardSxema>
              <img src={shema3} alt="image" />
              <p>{t("HomeSxema.3")}</p>
            </CardSxema>
            <CardSxema>
              <img src={shema4} alt="image" />
              <p>{t("HomeSxema.4")}</p>
            </CardSxema>
          </CardSxemaWrapper>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeSxema;
