import React from "react";
import { WrapperContainer } from "../../../../style-App";
import { Section, AdvantageCardWrapper, AdvantageCard } from "./styled-index";

import priem1 from "../../../../assets/images/client/preim.png";
import priem2 from "../../../../assets/images/client/preim2.png";
import priem3 from "../../../../assets/images/client/preim3.png";
import priem4 from "../../../../assets/images/client/preim4.png";
import { useTranslation } from "react-i18next";

const HomeAdvantage = () => {
    const [t, i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
          <h2>{t("HomeAdvan.0")}</h2>
          <AdvantageCardWrapper>
            <AdvantageCard>
              <img src={priem1} width={271} alt="image" />
              <p>{t("HomeAdvan.1")}</p>
            </AdvantageCard>
            <AdvantageCard>
              <img src={priem2} width={271} alt="image" />
              <p>{t("HomeAdvan.2")}</p>
            </AdvantageCard>
            <AdvantageCard>
              <img src={priem3} width={271} alt="image" />
              <p>{t("HomeAdvan.3")}</p>
            </AdvantageCard>
            <AdvantageCard>
              <img src={priem4} width={271} alt="image" />
              <p>{t("HomeAdvan.4")}</p>
            </AdvantageCard>
          </AdvantageCardWrapper>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeAdvantage;
