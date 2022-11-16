import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
import { ChooseContext } from "../../../../../context/client/choose/context";

function ModalPut({ handleClose, open, PutBlog, Title, Element }) {
  const [titleuz, setTitleUz] = useState(Element);
  const [titleru, setTitleRu] = useState(Element);
  const [titleen, setTitleEn] = useState(Element);
  const [clientcommentuz, setClientcommentuz] = useState(Element);
  const [clientcommentru, setClientcommentru] = useState(Element);
  const [clientcommenten, setClientcommenten] = useState(Element);
  const image = useRef();
  const avatarimage = useRef();
  const [clientnamesurname, setClientnamesurname] = useState(Element);
  const load = useRef();
  const [loading, setLoading] = useState(false);
  const [ceilingId, setCeilingId] = useState("");

  const { ChooseMap } = useContext(ChooseContext);

  const HandleSubmit = async (e, id) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("titleUz", titleuz);
    formData.append("titleRu", titleru);
    formData.append("titleEn", titleen);
    formData.append("client_comment_uz", clientcommentuz);
    formData.append("client_comment_ru", clientcommentru);
    formData.append("client_comment_en", clientcommenten);
    formData.append("client_name_surname", clientnamesurname);
    formData.append("image", image.current.files[0]);
    formData.append("avatar_image", avatarimage.current.files[0]);
    try {
      await fetch(`https://api.mirpotolkov.uz/client_comment/${id}`, {
        method: "PUT",
        body: formData,
      })
        .then((res) => res.text())
        .then((result) => console.log(result));
      e.target[0].value = null;
      e.target[1].value = null;
      e.target[2].value = null;
      e.target[3].value = null;
      e.target[4].value = null;
      e.target[5].value = null;
      e.target[6].value = null;
      e.target[7].value = null;
      e.target[8].value = null;
      e.target[9].value = null;
      e.target[10].value = null;
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
          <input type="file" accept="image/*" ref={image} required />
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

          <input type="text" onChange={(e) => setTitleUz(e.target.value)} name='titleuz' value={titleuz.titleuz} required />
          <input type="text" onChange={(e) => setTitleRu(e.target.value)} name='titleru' value={titleru.titleru} required />
          <input type="text" onChange={(e) => setTitleEn(e.target.value)} name='titleen' value={titleen.titleen} required />
          <input type="text" onChange={(e) => setClientcommentuz(e.target.value)} name='clientcommentuz' value={clientcommentuz.client_comment_uz} required />
          <input type="text" onChange={(e) => setClientcommenten(e.target.value)} name='clientcommenten' value={clientcommenten.client_comment_en} required />
          <input type="text" onChange={(e) => setClientcommentru(e.target.value)} name='clientcommentru' value={clientcommentru.client_comment_ru} required />
          <input type="text" onChange={(e) => setClientnamesurname(e.target.value)} name='clientnamesurname' value={clientnamesurname.client_name_surname} />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
