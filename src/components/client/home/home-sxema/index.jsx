import React from "react";
import { WrapperContainer } from "../../../../style-App";
import {Section, CardSxemaWrapper, CardSxema} from './styled-index'
import work_icon from "../../../../assets/images/client/work_icon1.png";
import work_icon2 from "../../../../assets/images/client/work_icon2.png";
import work_icon3 from "../../../../assets/images/client/work_icon3.png";
import work_icon4 from "../../../../assets/images/client/work_icon4.png";
import { useTranslation } from "react-i18next";
const HomeSxema = () => {
    const [t, i18n] = useTranslation()
  return (
    <>
      <Section id="HomeSxema">
        <WrapperContainer>
          <h2>{t("HomeSxema.0")}</h2>
          <CardSxemaWrapper>
            <CardSxema>
              <img src={work_icon}  width={100} height={100} alt="image" />
              <p>{t("HomeSxema.1")}</p>
            </CardSxema>
            <CardSxema>
              <img src={work_icon2} width={100} height={100}  alt="image" />
              <p>{t("HomeSxema.2")}</p>
            </CardSxema>
            <CardSxema>
              <img src={work_icon3} width={100} height={100}  alt="image" />
              <p>{t("HomeSxema.3")}</p>
            </CardSxema>
            <CardSxema>
              <img src={work_icon4} width={100} height={100}  alt="image" />
              <p>{t("HomeSxema.4")}</p>
            </CardSxema>
          </CardSxemaWrapper>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeSxema;
