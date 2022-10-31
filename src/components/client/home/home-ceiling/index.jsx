import React from "react";
import { WrapperContainer } from "../../../../style-App";
import {
  Section,
  CeilCardWrapper,
  CeilCard,
  CeilItem,
  Discount,
  DiscountItem,
  Line,
  LeftBlock,
} from "./styled-index";
import potolog from "../../../../assets/images/client/potolog.jpg";
import { useTranslation } from "react-i18next";

const card = [1, 2, 3, 4];

const HomeCeiling = () => {
  const [t,i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
          <CeilCardWrapper>
            <h2>{t("HomeCeil.0")}</h2>
            <CeilCard>
              {card.map(() => (
                <CeilItem>
                  <h4>Матовый потолок</h4>
                  <img src={potolog} alt="image" />
                  <Discount>
                    <DiscountItem>
                      <p>
                        Скидка 20%
                        <br />
                        <span>
                          230 руб/м <sup>2</sup>
                        </span>
                      </p>
                    </DiscountItem>
                    <DiscountItem>
                      <i class="bx bxs-check-shield"></i>
                      <p>
                        <span>30 лет</span> <br />
                        гарантии
                      </p>
                    </DiscountItem>
                  </Discount>
                  <LeftBlock>
                    <p>Цена с установкой</p>
                    <Line></Line>
                    <p>Более 190 оттенков</p>
                  </LeftBlock>
                  <button>
                    Заказать <i class="bx bx-right-arrow-circle"></i>
                  </button>
                </CeilItem>
              ))}
            </CeilCard>
          </CeilCardWrapper>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeCeiling;
