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

const card = [1, 2, 3, 4];

const HomeCeiling = () => {
  return (
    <>
      <Section>
        <WrapperContainer>
          <CeilCardWrapper>
            <h2><span>Выгодные решения</span> натяжных потолков</h2>
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
