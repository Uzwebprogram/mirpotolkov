import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
import { ChooseContext } from "../../../../../context/client/choose/context";
import axios from "axios";
import { useEffect } from "react";

function ModalPut({ handleClose, open, PutBlog, Element }) {
  const titleuz = useRef();
  const titleru = useRef();
  const titleen = useRef();

  const HandleSubmit = async (e, id) => {
    e.preventDefault();
    const req = {
      titleUz: titleuz.current.value,
      titleRu: titleru.current.value,
      titleEn: titleen.current.value,
    };
    const response = await axios.put(
      `https://api.mirpotolkov.uz/ceiling_option/${id}`,
      req
    );
    console.log(response);
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
          <span>Изменить категория</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTop>
        <hr />
        <Form className="form" onSubmit={(e) => HandleSubmit(e, PutBlog)}>
          <input
            ref={titleuz}
            name="titleuz"
            placeholder="категория_uz"
            type="text"
            
          />
          <input
            ref={titleru}
            name="titleru"
            placeholder="категория_ru"
            type="text"
          />
          <input
            ref={titleen}
            name="titleen"
            placeholder="категория_en"
            type="text"
            
          />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
