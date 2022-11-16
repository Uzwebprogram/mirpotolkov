import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
import { ChooseContext } from "../../../../../context/client/choose/context";
import axios from "axios";
import { useEffect } from "react";

function ModalPut({ handleClose, open, PutBlog, Element }) {
  const [titleuz, setTitleUz] = useState(Element);
  const [titleru, setTitleRu] = useState(Element);
  const [titleen, setTitleEn] = useState(Element);
  const [data , setData] = useState([]);
    let newState = Element.map((e) => e); 
  const HandleSubmit = async (e, id) => {
    e.preventDefault();
    const req = {
      titleUz: titleuz,
      titleRu: titleru,
      titleEn: titleen,
    };
    const response = await axios.put(
      `https://api.mirpotolkov.uz/ceiling_option/${id}`,
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
          <span>Изменить категория</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTop>
        <hr />
        <Form className="form" onSubmit={(e) => HandleSubmit(e, PutBlog)}>
          <input
            value={titleuz.titleuz}
            name="titleuz"
            onChange={(e) => setTitleUz(e.target.value)}
            type="text"
            required
          />
          <input
            value={titleru.titleru}
            name="titleru"
            onChange={(e) => setTitleRu(e.target.value)}
            type="text"
            required
          />
          <input
            value={titleen.titleen}
            name="titleen"
            onChange={(e) => setTitleEn(e.target.value)}
            type="text"
            required
          />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
