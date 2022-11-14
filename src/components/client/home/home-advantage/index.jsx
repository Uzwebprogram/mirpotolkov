import React from "react";
import { WrapperContainer } from "../../../../style-App";
import { Section, AdvantageCardWrapper, AdvantageCard , CardImage } from "./styled-index";

import priem1 from "../../../../assets/images/client/icon_1.png";
import priem2 from "../../../../assets/images/client/icon_2.png";
import priem3 from "../../../../assets/images/client/icon_3.png";
import priem4 from "../../../../assets/images/client/icon_4.png";

import priem5 from "../../../../assets/images/client/add1.png";
import priem6 from "../../../../assets/images/client/add2.png";
import priem7 from "../../../../assets/images/client/add3.png";
import priem8 from "../../../../assets/images/client/add4.png";

import { useTranslation } from "react-i18next";

const HomeAdvantage = () => {
    const [t, i18n] = useTranslation()
  return (
    <>
      <Section id="Advantage">
        <WrapperContainer>
          <h2>{t("HomeAdvan.0")}</h2>
          <AdvantageCardWrapper>
            <AdvantageCard>
              <CardImage>
              <img src={priem5} alt="imagee" />
              <img src={priem1} alt="image" />
              </CardImage>
              <p>{t("HomeAdvan.1")}</p>
            </AdvantageCard>
            <AdvantageCard>
            <CardImage>
              <img src={priem6} alt="imagee" />
              <img src={priem2} alt="image" />
              </CardImage>
              <p>{t("HomeAdvan.2")}</p>
            </AdvantageCard>
            <AdvantageCard>
            <CardImage>
              <img src={priem7} alt="imagee" />
              <img src={priem3} alt="image" />
              </CardImage>
              <p>{t("HomeAdvan.3")}</p>
            </AdvantageCard>
            <AdvantageCard>
            <CardImage>
              <img src={priem8} alt="imagee" />
              <img src={priem4} alt="image" />
              </CardImage>
              <p>{t("HomeAdvan.4")}</p>
            </AdvantageCard>
          </AdvantageCardWrapper>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeAdvantage;
