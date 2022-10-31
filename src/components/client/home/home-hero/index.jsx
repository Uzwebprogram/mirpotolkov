import React from "react";
import HeaderBottom from "../../header/HeaderBottom";
import { WrapperContainer } from "../../../../style-App";
import { Section } from "../../header/styled-index";
import Header from "../../header";
import { Form, HomeContent, FormP, FormInBt } from "./styled-index";
import { useTranslation } from "react-i18next";

const HomeHero = () => {
  const [t, i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
          <HeaderBottom />
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
            <Form>
              <FormInBt>
                <div>
                  <i class="bx bxs-phone"></i>
                  <input type="tel" placeholder={t("Home.3")} />
                </div>
                <button>
                {t("Home.4")}
                  <i class="bx bx-right-arrow-circle"></i>
                </button>
              </FormInBt>
              <FormP>
                <p>
                {t("Home.5")}
                </p>
                <p>
                {t("Home.6")}
                </p>
              </FormP>
            </Form>
          </HomeContent>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeHero;
