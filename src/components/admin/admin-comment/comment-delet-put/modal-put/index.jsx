import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
import { ChooseContext } from "../../../../../context/client/choose/context";

function ModalPut({ handleClose, open, PutBlog, Title, Element }) {
  const titleuz = useRef();
  const titleen = useRef();
  const titleru = useRef();
  const clientcommentuz = useRef();
  const clientcommentru = useRef();
  const clientcommenten = useRef();
  const creatingCanvas = useRef();
  const mounting = useRef();
  const image = useRef();
  const avatarimage = useRef();
  const volume = useRef();
  const clientnamesurname = useRef();
  const moneys = useRef()
  const load = useRef();
  const [loading, setLoading] = useState(false);
  const [ceilingId, setCeilingId] = useState("");

  const { ChooseMap } = useContext(ChooseContext);

  const HandleSubmit = async (e, id) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("titleUz", titleuz.current.value);
    formData.append("titleRu", titleru.current.value);
    formData.append("titleEn", titleen.current.value);
    formData.append("client_comment_uz", clientcommentuz.current.value);
    formData.append("client_comment_ru", clientcommentru.current.value);
    formData.append("client_comment_en", clientcommenten.current.value);
    formData.append("client_name_surname", clientnamesurname.current.value);
    formData.append("Volume", volume.current.value);
    formData.append("mounting", mounting.current.value);
    formData.append("creating_canvas", creatingCanvas.current.value);
    formData.append("image", image.current.files[0]);
    formData.append("avatar_image", avatarimage.current.files[0]);
    formData.append("money", moneys.current.value);
    try {
      await fetch(`https://mebel-b.herokuapp.com/client_comment/${id}`, {
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
        <Form className="form" onSubmit={(e) => HandleSubmit(e, PutBlog)}>
          <input type="file" id="fileImagePut" ref={image} />
          <label for="fileImagePut" class="custom-file-upload">
            <span className="span-download">
              <ion-icon name="cloud-download-outline"></ion-icon>
            </span>
            загрузить изображение
          </label>

          <hr />
          <input type="file" id="fileAvatarPut" ref={avatarimage} />
          <label for="fileAvatarPut" class="custom-file-upload">
            <span className="span-download">
              <ion-icon name="cloud-download-outline"></ion-icon>
            </span>
            загрузить аватар
          </label>

          {loading ? (
            <>
              <span className="loading">загрузка...</span>
            </>
          ) : null}
          <span ref={load} style={{ display: "none" }}>
            загрузка...
          </span>

          <input type="text" placeholder={Element.titleuz} ref={titleuz} />
          <input type="text" placeholder={Element.titleru} ref={titleru} />
          <input type="text" placeholder={Element.titleen} ref={titleen} />
          <input type="text" placeholder={Element.client_comment_uz} ref={clientcommentuz} />
          <input type="text" placeholder={Element.client_comment_en} ref={clientcommenten} />
          <input type="text" placeholder={Element.client_comment_en} ref={clientcommentru} />
          <input type="text" placeholder={Element.client_name_surname} ref={clientnamesurname} />
          <input type="text" placeholder={Element.money} ref={moneys} />
          <input type="text" placeholder={Element.mounting} ref={mounting} />
          <input type="text" placeholder={Element.volume} ref={volume} />
          <input type="text" placeholder={Element.creating_canvas} ref={creatingCanvas} />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
