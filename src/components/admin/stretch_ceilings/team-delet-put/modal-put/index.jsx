import { useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
function ModalPut({ handleClose, open, PutBlog, Title, Element }) {
  const image = useRef();
  const titleuz = useRef();
  const titleen = useRef();
  const titleru = useRef();
  const money = useRef();
  const skidka = useRef();
  const shades = useRef();
  const HandleSubmit = async (e, id) => {
    e.preventDefault();
    let form = new FormData();
    form.append("titleUz", titleuz.current.value);
    form.append("titleEn", titleen.current.value);
    form.append("titleRu", titleru.current.value);
    form.append("money", money.current.value);
    form.append("skidka", skidka.current.value);
    form.append("shades", shades.current.value);
    form.append("image", image.current.files[0]);
    try {
      await fetch(`https://api.mirpotolkov.uz/stretch_ceilings/${id}`, {
        method: "PUT",
        body: form,
      })
        .then((res) => res.text())
        .then((result) => console.log(result));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      <ModalCommon
        height={400}
        scroll="scroll"
        handleClose={handleClose}
        open={open}
      >
        <ModalTop>
          <span>Изменить КЛИЕНТЫ</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTop>
        <hr />
        <Form className="form" onSubmit={(e) => HandleSubmit(e, PutBlog)}>
          <input type="file" id="file" ref={image} />
          <label for="file" class="custom-file-upload">
            <span className="span-download">
              <ion-icon name="cloud-download-outline"></ion-icon>
            </span>
            загрузить изображение
          </label>
          <input
            placeholder={Element.titleuz}
            type="text"
            ref={titleuz}
          />
          <input
            placeholder={Element.titleru}
            type="text"
            ref={titleru}
          />
          <input
            placeholder={Element.titleen}
            type="text"
            ref={titleen}
          />
          <input
            placeholder={Element.money}
            type="text"
            ref={money}
          />
          <input
            placeholder={Element.skidka}
            type="text"
            ref={skidka}
          />
          <input
            placeholder={Element.shades}
            type="text"
            ref={shades}
          />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
