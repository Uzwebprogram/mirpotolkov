import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, FormP, FormInBt } from "../home-hero/styled-index";
import { BlueLine, FormCost, FormGroup } from "./styled-index";
import { ReactPhoneInput } from "../../Modal/styled-index"; 
import ModalPhone from "../../Modal";
import axios from "axios";
const HomeForm = ({ isText, isCost, isCount }) => {
  const [t, i18n] = useTranslation();
  const input1 = useRef();
  const input2 = useRef();
  const select = useRef();
  const [count , setCount] = useState(null);
  const [numberValue , setNumberValue] = React.useState();
  const HandleSubmit = async (e)=>{
    e.preventDefault();
    const req = {
      telephone : numberValue
    }
    const response = await axios.post("https://mebel-b.herokuapp.com/contact_us" , req)
    console.log(response);
  }
  const HanleChange = (e) =>{
    setCount((Number(input1.current.value) * Number(input2.current.value)) *  Number(e.target.value))
  }
  const HanleChangeInput = (e) =>{
    setCount((Number(e.target.value) * Number(input2.current.value)) *  Number(select.current.value))
  }
  const HanleChangeInput2 = (e) =>{
    setCount((Number(input1.current.value) * Number(e.target.value)) *  Number(select.current.value))
  }
  return (
    <>
      <Form>
        {isCost ? (
          <div>
            <BlueLine></BlueLine>
            <FormCost>
              <FormGroup>
                <label htmlFor="square">Площадь потолка</label>
                <input onChange={HanleChangeInput} ref={input1} type="number" id="square" placeholder="0" />
              </FormGroup>
              <i class="bx bx-chevron-right"></i>
              <FormGroup>
                <label htmlFor="chandeliers">Количество люстр</label>
                <input onChange={HanleChangeInput2} ref={input2} type="number" id="chandeliers" placeholder="0" />
              </FormGroup>
              <i class="bx bx-chevron-right"></i>
              <FormGroup>
                <label htmlFor="inputtype">Тип потолка</label>
                <select ref={select} onChange={HanleChange} name="" id="inputtype">
                  <option value="300000">Матовый</option>
                  <option value="150000">Глянцевый</option>
                  <option value="250000">Сатиновый</option>
                  <option value="500000">Двухуровневый</option>
                </select>
              </FormGroup>
            </FormCost>
            <BlueLine>
              {count ?<h3>{count} Cум</h3>: null}
            </BlueLine>
          </div>
        ) : null}
        {isCost ? null : (
          <FormInBt>
              <ReactPhoneInput
            country={'uz'}
            name="Number"
            onChange={(data) => setNumberValue(data)}
          />
            <button onClick={HandleSubmit}>
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
