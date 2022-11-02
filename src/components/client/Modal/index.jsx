import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {ModalHeader, ModalBody, ModalForm, ModalFooter} from './styled-index'

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
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModalHeader>
              <h2>Оставьте заявку и наш менеджер Вам перезвонит</h2>
            </ModalHeader>
            <ModalBody>
                <ModalForm>
                    <input type="tel" placeholder="Номер телефона" />
                    <button type="submit">Рассчитать стоимость</button>
                </ModalForm>
            </ModalBody>
            <ModalFooter>
              <p>
                Отправля я данную форму, я соглашаюсь на обработку персональных
                данных
              </p>
            </ModalFooter>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ModalPhone;
