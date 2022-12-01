import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, FormP, FormInBt } from "../home-hero/styled-index";
import {
  BlueLine,
  FormCost,
  FormGroup,
  ButtonOk,
  LinkItem,
} from "./styled-index";
import { ReactPhoneInput } from "../../Modal/styled-index";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import ModalPhone from "../../Modal";
// import { LinkItem } from "../../header/HeaderBottom/styled-index";
const HomeForm = ({ isText, isCost, isCount }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    borderRadius: 5,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  };
  const [t, i18n] = useTranslation();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const select = useRef();
  const [count, setCount] = useState(null);
  const [numberValue, setNumberValue] = useState();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const req = {
      telephone: numberValue,
    };
    const response = await axios.post(
      "https://api.mirpotolkov.uz/contact_us",
      req
    );
    if (response) {
      handleOpen2();
    }
  };
  const HanleChange = (e) => {
    setCount(
      Number(input1.current.value) *
        Number(input2.current.value) *
        Number(e.target.value)
    );
  };
  const HanleChangeInput = (e) => {
    setCount(
      Number(e.target.value) *
        Number(input2.current.value) *
        Number(select.current.value)
    );
  };
  const HanleChangeInput2 = (e) => {
    setCount(
      Number(input1.current.value) *
        Number(e.target.value) *
        Number(select.current.value)
    );
  };
  const HanleChangeInput3 = (e) => {
    let lyustra = e.target.value * 50000;
    setCount(
      Number(input1.current.value) *
        Number(input2.current.value) *
        Number(select.current.value) +
        lyustra
    );
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  return (
    <>
      <Form>
        {isCost ? (
          <div>
            <BlueLine>
              
            </BlueLine>
            <FormCost>
              <FormGroup>
                <label htmlFor="square">{t("HomeCost.1")}</label>
                <input
                  onChange={HanleChangeInput}
                  ref={input1}
                  type="number"
                  id="square"
                  placeholder="0"
                />
              </FormGroup>
              <i class="bx bx-chevron-right"></i>
              <FormGroup>
                <label htmlFor="square">{t("HomeCost.3")}</label>
                <input
                  ref={input2}
                  onChange={HanleChangeInput2}
                  type="number"
                  id="square"
                  placeholder="0"
                />
              </FormGroup>
              <i class="bx bx-chevron-right"></i>
              <FormGroup>
                <label htmlFor="chandeliers">{t("HomeCost.5")}</label>
                <input
                  ref={input3}
                  onChange={HanleChangeInput3}
                  type="number"
                  id="chandeliers"
                  placeholder="0"
                />
              </FormGroup>
              <i class="bx bx-chevron-right"></i>
              <FormGroup>
                <label htmlFor="inputtype">{t("HomeCost.6")}</label>
                <select
                  ref={select}
                  onChange={HanleChange}
                  name=""
                  id="inputtype"
                >
                  <option value="140000">{t("HomeCost.7")}</option>
                  <option value="140000">{t("HomeCost.8")}</option>
                  <option value="140000">{t("HomeCost.9")}</option>
                  <option value="300000">{t("HomeCost.10")}</option>
                </select>
              </FormGroup>
              <ModalPhone
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
              />
            </FormCost>
            <LinkItem>
              <button
                type="button"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  marginLeft: "auto",
                }}
                onClick={handleOpen}
              >
                {t("Header.8")}
                <i class="bx bx-right-arrow-circle"></i>
              </button>
            </LinkItem>
            <BlueLine>
              {count ? (
                <h3>
                  {count} {t("HomeCost.11")}
                </h3>
              ) : null}
            </BlueLine>
          </div>
        ) : null}

        {isCost ? null : (
          <FormInBt>
            <ReactPhoneInput
              country={"uz"}
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
            <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <h3 style={{ textAlign: "center" }}>{t("HomeCost.2")}</h3>
                <ButtonOk onClick={handleClose2}>Oк</ButtonOk>
              </Box>
            </Modal>
            {isText ? (
              <p></p>
            ) : (
              <p style={{ color: "#fff", opacity: "0.7" }}>{t("Home.5")}</p>
            )}
          </FormP>
        )}
      </Form>
    </>
  );
};

export default HomeForm;
