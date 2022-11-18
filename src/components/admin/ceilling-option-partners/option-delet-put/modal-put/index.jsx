import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
import { ChooseContext } from "../../../../../context/client/choose/context";
import axios from "axios";

function ModalPut({ handleClose, open, PutBlog, Element }) {
  const regionuz = useRef();
  const regionru =useRef();
  const regionen = useRef()
 
  const HandleSubmit = async (e, id) => {
    e.preventDefault();
    const req = {
      region_name_uz: regionuz.current.value,
      region_name_ru: regionru.current.value,
      region_name_en: regionen.current.value,
    };
    const response = await axios.put(
      `https://api.mirpotolkov.uz/region/${id}`,
      req
    );
    if (response) {
      handleClose();
    }
  };
  return (
    <Wrapper>
      <ModalCommon
        width={500}
        height={400}
        scroll="scroll"
        handleClose={handleClose}
        open={open}
      >
        <ModalTop>
          <span>Изменить region</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTop>
        <hr />
        <Form className="form" onSubmit={(e) => HandleSubmit(e, PutBlog)}>
          <input
            ref={regionuz}
            type="text"
            placeholder='region_name_uz'
          />
          <input
            ref={regionru}
            type="text"
            placeholder='region_name_ru'
          />
          <input
            ref={regionen}
            type="text"
            placeholder='region_name_en'
          />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
