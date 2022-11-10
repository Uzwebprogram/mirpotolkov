import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
import { ChooseContext } from "../../../../../context/client/choose/context";
import axios from "axios";

function ModalPut({ handleClose, open, PutBlog }) {
    const titleuz = useRef();
    const titleen = useRef();
    const titleru = useRef();
  const HandleSubmit = async (e, id) => {
    e.preventDefault();
    const req = {
      titleUz: titleuz.current.value,
      titleRu: titleru.current.value,
      titleEn: titleen.current.value
    }
    const response = await axios.put(`https://api.mirpotolkov.uz/ceiling_option/${id}` , req)
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
          <span>Добавить потолков</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTop>
        <Form
          className="form"
          onSubmit={(e) => HandleSubmit(e , PutBlog)}
        >
                    <input
            ref={titleuz}
            type="text"
            placeholder="название потолка уз"
            required
          />
          <input
            ref={titleru}
            type="text"
            placeholder="название потолка ру"
            required
          />
          <input
            ref={titleen}
            type="text"
            placeholder="название потолка ен"
            required
          />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
