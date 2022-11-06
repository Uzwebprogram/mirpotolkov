import React, { useRef, useState, useTransition } from "react";
import { WrapperContainer } from "../../../../style-App";
import { Section } from "./styled-index";
import HomeForm from "../home-form";
import { useTranslation } from "react-i18next";
import { ButtonAdd } from "../home-form/styled-index";

const HomeCost = ({ isCost }) => {
  const [t, i18n] = useTranslation();
  const data = [1, 2, 3, 4];
  const calAdd = useRef();
  const calAdd1 = useRef();
  const calAdd2 = useRef();

  const [calculator, setCalcutor] = useState(0);
  return (
    <>
      <Section calculator={calculator == 1} id="calculator">
        <WrapperContainer>
          <h2>{t("HomeCost.0")}</h2>
          {calculator == 0
            ? data
                .slice(0, 1)
                .map((elem, index) => 
                <>
                <HomeForm isCost={isCost} /> 
                <ButtonAdd ref={calAdd} calculator={calculator == 1} onClick={() => {
                  setCalcutor(1)
                  calAdd.current.style.display = "none"
                }}>{t("HomeCost.12")}</ButtonAdd>
                </>
                )
            : calculator == 1
            ? data
                .slice(0, 2)
                .map((elem, index) => (
                     <>
                <HomeForm isCost={isCost} /> 
                <ButtonAdd ref={calAdd1} onClick={() => {
                  setCalcutor(2)
                  calAdd1.current.style.display = "none"}}>Добавить комнату</ButtonAdd>
                </>
                ))
            : calculator == 2
            ? data
                .slice(0, 3)
                .map((elem, index) => (
                 <>
                <HomeForm isCost={isCost} /> 
                <ButtonAdd ref={calAdd2} onClick={() => {
                  setCalcutor(3)
                  calAdd2.current.style.display = "none"}}>Добавить комнату</ButtonAdd>
                </>
                ))
            : calculator == 3
            ? data
                .slice(0, 4)
                .map((elem, index) => (
                <>
                <HomeForm isCost={isCost} /> 
                </>
                ))
            : null}
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeCost;
