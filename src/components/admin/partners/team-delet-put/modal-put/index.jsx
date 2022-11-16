import { useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
function ModalPut({ handleClose, open, PutBlog, Title, Element }) {
  const titleuz = useRef();
  const titleru = useRef();
  const titleen = useRef();
  const phone = useRef();
  const partnerName = useRef();
  const image = useRef();
  const avatarImage = useRef();

  const HandleSubmit = async (e, id) => {
    e.preventDefault();
    let form = new FormData();
    form.append("titleUz", titleuz.current.value);
    form.append("titleEn", titleen.current.value);
    form.append("titleRu", titleru.current.value);
    form.append("phone", phone.current.value);
    form.append("partner_name", partnerName.current.value);
    form.append("image", image.current.files[0]);
    form.append("avatar_image", avatarImage.current.files[0]);
    try {
      await fetch(`https://api.mirpotolkov.uz/partners/${id}`, {
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
        width={350}
        scroll="scroll"
        handleClose={handleClose}
        open={open}
      >
        <ModalTop>
          <span>Изменить Партнеры</span>
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
          <br />
          <input type="file" id="Avatarfile" ref={avatarImage} />
          <label for="Avatarfile" class="custom-file-upload">
            <span className="span-download">
              <ion-icon name="cloud-download-outline"></ion-icon>
            </span>
            загрузить аватар
          </label>
          <input ref={titleuz} placeholder={Element.titleuz} type="text" required />
          <input ref={titleru} placeholder={Element.titleru} type="text" required />
          <input ref={titleen} placeholder={Element.titleen} type="text" required />
          <input ref={phone} placeholder={Element.phone} type="tel" required />
          <input ref={partnerName} placeholder={Element.partner_name} type="text" required />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
