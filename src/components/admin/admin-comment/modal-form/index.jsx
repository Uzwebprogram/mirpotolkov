import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../common/modal";
import axios from "axios";
import { ChooseContext } from "../../../../context/client/choose/context";
import { CommentContext } from "../../../../context/client/comment/context";

function CommentModal() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const titleuz = useRef();
  const titleen = useRef();
  const titleru = useRef();
  const clientcommentuz = useRef();
  const clientcommentru = useRef();
  const clientcommenten = useRef();
  const image = useRef();
  const avatarimage = useRef();
  const clientnamesurname = useRef();
  const load = useRef();
  const handleUpload = async (e) => {
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
    const res = await fetch("https://api.mirpotolkov.uz/client_comment", {
      method: "POST",
      body: formData,
    });
    let x= await res.json();
    // e.target[0].value = null;
    // e.target[1].value = null;
    // e.target[2].value = null;
    // e.target[3].value = null;
    // e.target[4].value = null;
    // e.target[5].value = null;
    // e.target[6].value = null;
    // e.target[7].value = null;
    // e.target[8].value = null;
    // e.target[9].value = null;
    // e.target[10].value = null;
    // e.target[11].value = null;
    // e.target[12].value = null;
    console.log(x);
  };

  return (
    <>
      <Wrapper>
        <button onClick={handleOpen}>Добавить работника</button>
        <ModalCommon
          scroll="scroll"
          height="400px"
          handleClose={handleClose}
          open={open}
          width={"400px"}
        >
          <ModalTop>
            <span>Добавить потолков</span>
            <span onClick={handleClose}>&times;</span>
          </ModalTop>
          <hr />
          <Form className="form" encType="multipart/form-data" onSubmit={handleUpload}>
            <input type="file" accept="image/*"  ref={image} required />


            <hr />
            <input type="file" accept="image/*" ref={avatarimage} required />


            {loading ? (
              <>
                <span className="loading">загрузка...</span>
              </>
            ) : null}
            <span ref={load} style={{ display: "none" }}>
              загрузка...
            </span>



            <input type="text" placeholder="потолоков уз" ref={titleuz} />
            <input type="text" placeholder="потолоков ру" ref={titleru} />
            <input type="text" placeholder="потолоков ен" ref={titleen} />
            <input type="text" placeholder="Заказчик комментарий уз" ref={clientcommentuz} />
            <input type="text" placeholder="Заказчик комментарий ру" ref={clientcommentru} />
            <input type="text" placeholder="Заказчик комментарий ен" ref={clientcommenten} />
            <input type="text" placeholder="Заказчик имя фамилия" ref={clientnamesurname} />
            <button type="submit">Сохранять</button>
          </Form>
        </ModalCommon>
      </Wrapper>
    </>
  );
}
export default CommentModal;