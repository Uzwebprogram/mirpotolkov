import React from "react";
import { useTranslation } from "react-i18next";
import { Form, FormP, FormInBt } from "../home-hero/styled-index";
import { BlueLine, FormCost, FormGroup } from "./styled-index";
import ModalPhone from "../../Modal";
const HomeForm = ({ isText, isCost, isCount }) => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <Form>
        {isCost ? (
          <div>
            <BlueLine></BlueLine>
            <FormCost>
              <FormGroup>
                <label htmlFor="square">Площадь потолка</label>
                <input type="number" id="square" placeholder="10" />
              </FormGroup>
              <i class="bx bx-chevron-right"></i>
              <FormGroup>
                <label htmlFor="chandeliers">Количество люстр</label>
                <input type="number" id="chandeliers" placeholder="4" />
              </FormGroup>
              <i class="bx bx-chevron-right"></i>
              <FormGroup>
                <label htmlFor="inputtype">Тип потолка</label>
                <select name="" id="inputtype">
                  <option value="1">Матовый</option>
                  <option value="2">Глянцевый</option>
                  <option value="3">Сатиновый</option>
                  <option value="4">Двухуровневый</option>
                </select>
              </FormGroup>
            </FormCost>
            <BlueLine></BlueLine>
          </div>
        ) : null}
        {isCost ? null : (
          <FormInBt>
            <div>
              <i class="bx bxs-phone"></i>
              <input type="tel" placeholder={t("Home.3")} />
            </div>
            <button type="button">
              {t("Home.4")}
              <i class="bx bx-right-arrow-circle"></i>
            </button>
          </FormInBt>
        )}
        {isCost ? null : (
          <FormP>
            {isText ? (
              <p>{t("Home.5")}</p>
            ) : (
              <p style={{ color: "#fff", opacity: "0.7" }}>{t("Home.5")}</p>
            )}

            {isText ? <p>{t("Home.6")}</p> : null}
          </FormP>
        )}
      </Form>
    </>
  );
};

export default HomeForm;
