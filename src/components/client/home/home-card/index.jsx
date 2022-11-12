import React from "react";
import { WrapperContainer } from "../../../../style-App";
import { Section, CardList, CardItem, CardContent, CardImg } from "./styled-index";

import img1 from "../../../../assets/images/client/1.jpg";
import img2 from "../../../../assets/images/client/iconCard.svg";
import img3 from "../../../../assets/images/client/3.jpg";
import img4 from "../../../../assets/images/client/4.jpg";
import { useTranslation } from "react-i18next";

const HomeCard = () => {
    const [t, i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
          <CardList>
            <CardItem>
              <CardImg>
                <img src={img1} alt="image" />
              </CardImg>
              <CardContent>
                <h4>{t("HomeCard.0")}</h4>
                <p>
                  <i class="bx bx-chevron-right"></i> {t("HomeCard.1")}
                </p>
                <p>
                  <i class="bx bx-chevron-right"></i> {t("HomeCard.2")}
                </p>
              </CardContent>
            </CardItem>
            <CardItem>
              <img src={img2} alt="image" />
              <CardContent>
                <h4>{t("HomeCard.3")}</h4>
                <p>
                  {" "}
                  <i class="bx bx-chevron-right"></i>{t("HomeCard.4")}
                </p>
                <p>
                  {" "}
                  <i class="bx bx-chevron-right"></i>{t("HomeCard.5")}
                </p>
              </CardContent>
            </CardItem>
            <CardItem>
              <img src={img3} alt="image" />
              <CardContent>
                <h4>{t("HomeCard.6")}</h4>
                <p>
                  {" "}
                  <i class="bx bx-chevron-right"></i>{t("HomeCard.7")}
                </p>
                <p>
                  {" "}
                  <i class="bx bx-chevron-right"></i>{t("HomeCard.8")}
                </p>
              </CardContent>
            </CardItem>
            <CardItem>
              <img src={img4} alt="image" />
              <CardContent>
                <h4>{t("HomeCard.9")}</h4>
                <p>
                  {" "}
                  <i class="bx bx-chevron-right"></i>{t("HomeCard.10")}
                </p>
                <p>
                  {" "}
                  <i class="bx bx-chevron-right"></i>{t("HomeCard.11")}
                </p>
              </CardContent>
            </CardItem>
          </CardList>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeCard;
