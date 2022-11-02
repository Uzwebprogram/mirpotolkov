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

const {CommentMap} = useContext(CommentContext)


  const titleuz = useRef();
  const titleen = useRef();
  const titleru = useRef();
  const clientcommentuz = useRef();
  const clientcommentru = useRef();
  const clientcommenten = useRef();
  // const date = useRef();
  const creatingCanvas = useRef();
  const mounting = useRef();
  const money = useRef();
  const image = useRef();
  const avatarimage = useRef();
  const volume = useRef();
  const clientnamesurname = useRef();
  const load = useRef();

//   titleUz,
// titleEn,
// titleRu,
// creating_canvas
// ,mounting,
// Volume,
// image
// ,avatar_image
// ,client_name_surname
// ,client_comment_ru
// ,client_comment_uz
// ,client_comment_en
  const HandleSubmit = async (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("titleUz", titleuz.current.value);
    form.append("titleEn", titleen.current.value);
    form.append("titleRu", titleru.current.value);
    form.append("client_comment_uz", clientcommentuz.current.value);
    form.append("client_comment_en", clientcommenten.current.value);
    form.append("client_comment_ru", clientcommentru.current.value);
    // form.append("money", money.current.value);
    form.append("image", image.current.files[0]);
    form.append("avatar_image", avatarimage.current.files[0]);
    // form.append("money", money.current.value);
    form.append("Volume", volume.current.value);
    form.append("mounting", mounting.current.value);
    form.append("client_name_surname", clientnamesurname.current.value);
    form.append("creating_canvas", creatingCanvas.current.value)
    try {
      await fetch("https://mebel-b.herokuapp.com/client_comment", {
        method: "POST",
        body: form,
      })
        .then((res) => res.json())
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
      e.target[11].value = null;
      // e.target[12].value = null;
      // e.target[13].value = null;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <button onClick={handleOpen}>Добавить работника</button>

      <ModalCommon
        scroll="scroll"
        height="400px"
        handleClose={handleClose}
        open={open}
      >
        <ModalTop>
          <span>Добавить потолков</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTop>
        <Form
          className="form"
          enctype="multipart/form-data"
          onSubmit={HandleSubmit}
        >
          
          <input type="file" id="file" ref={image} />
          <label for="file" class="custom-file-upload">
            <span className="span-download">
              <ion-icon name="cloud-download-outline"></ion-icon>
            </span>
            загрузить изображение
          </label>
          <input type="file" id="file" ref={avatarimage} />
          <label for="file" class="custom-file-upload">
            <span className="span-download">
              <ion-icon name="cloud-download-outline"></ion-icon>
            </span>
            загрузить изображение
          </label>
          {loading ? (
            <>
              <span className="loading">загрузка...</span>
            </>
          ) : null}
          <span ref={load} style={{ display: "none" }}>
            загрузка...
          </span>
          <input
            ref={clientnamesurname}
            type="text"
            placeholder="fullname"
            required
          />
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
          <input
            ref={clientcommentuz}
            type="text"
            placeholder="название потолка уз"
            required
          />
          <input
            ref={clientcommentru}
            type="text"
            placeholder="название потолка ру"
            required
          />
          <input
            ref={clientcommenten}
            type="text"
            placeholder="название потолка ен"
            required
          />
          {/* <input ref={money} type="text" placeholder="Денги" required /> */}
          <input ref={creatingCanvas} type="text" placeholder="creatingCanvas" required />
          <input ref={mounting} type="text" placeholder="mounting" required />
          <input ref={volume} type="text" placeholder="volume" required />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default CommentModal;
