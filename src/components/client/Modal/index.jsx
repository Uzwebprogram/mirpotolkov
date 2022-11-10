import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {ModalHeader, ModalBody, ModalForm, ModalFooter} from './styled-index'
import axios from "axios";
import 'react-phone-input-2/lib/style.css';
import { ReactPhoneInput } from "./styled-index";
import { useTranslation } from "react-i18next";
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

const ModalPhone = ({ open, setOpen, handleClose }) => {
  const [numberValue , setNumberValue] = React.useState();
  const {t , i18n} = useTranslation();
  const HandleSubmit = async (e)=>{
    e.preventDefault();
    const req = {
      telephone : numberValue
    }
    const response = await axios.post("https://api.mirpotolkov.uz/contact_us" , req)
    if (response) {
      setOpen(false)
    }
  }
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <ModalHeader>
              <h2>{t("HomeForm.0")}</h2>
            </ModalHeader>
            <ModalBody>
                <ModalForm onSubmit={HandleSubmit}>
                <ReactPhoneInput
                country={'uz'}
                name="Number"
                onChange={(data) => setNumberValue(data)}
              />
                    <button type="submit">{t("HomeForm.1")}</button>
                </ModalForm>
            </ModalBody>
            <ModalFooter>
              <p>
              {t("HomeForm.2")}
              </p>
            </ModalFooter>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ModalPhone;
