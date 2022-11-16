import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
import { ChooseContext } from "../../../../../context/client/choose/context";

function ModalPut({ handleClose, open, PutBlog, Title, Element }) {
 
  const titleuz = useRef();
  const titleru = useRef();
  const titleen = useRef();
  const clientcommentuz = useRef();
  const clientcommentru = useRef();
  const clientcommenten = useRef();
  const image = useRef();
  const avatarimage = useRef();
  const clientnamesurname = useRef();
  const load = useRef();
  const [loading, setLoading] = useState(false);

  const { ChooseMap } = useContext(ChooseContext);

  const HandleSubmit = async (e, id) => {
    console.log(id)
    e.preventDefault();
    let formData = new FormData();
    formData.append("titleUz", titleuz.current.value);
    formData.append("titleRu", titleru.current.value);
    formData.append("titleEn", titleen.current.value);
    formData.append("client_comment_uz", clientcommentuz.current.value);
    formData.append("client_comment_ru", clientcommentru.current.value);
    formData.append("client_comment_en", clientcommenten.current.value);
    formData.append("client_name_surname", clientnamesurname.current.value);
    formData.append("image", image.current.files[0]);
    formData.append("avatar_image", avatarimage.current.files[0]);
    try {
      await fetch(`https://api.mirpotolkov.uz/client_comment/${id}`, {
        method: "PUT",
        body: formData,
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
        <hr />
        <Form className="form" encType="multipart/form-data"  onSubmit={(e) => HandleSubmit(e, PutBlog)}>
          
          <input type="file" accept="image/*" ref={image} />
          <hr />
          <input type="file" accept="image/*" ref={avatarimage} />

          <input type="text" placeholder={Element.titleuz} ref={titleuz}/>
          <input type="text" placeholder={Element.titleru} ref={titleru}/>
          <input type="text" placeholder={Element.titleen} ref={titleen}/>
          <input type="text" placeholder={Element.client_comment_uz} ref={clientcommentuz}/>
          <input type="text" placeholder={Element.client_comment_en} ref={clientcommenten}/>
          <input type="text" placeholder={Element.client_comment_ru} ref={clientcommentru}/>
          <input type="text" placeholder={Element.client_name_surname} ref={clientnamesurname} />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
