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

  const { CommentMap } = useContext(CommentContext);

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
  const money = useRef();
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
    formData.append("Volume", volume.current.value);
    formData.append("money", money.current.value);
    formData.append("mounting", mounting.current.value);
    formData.append("creating_canvas", creatingCanvas.current.value);
    formData.append("image", image.current.files[0]);
    formData.append("avatar_image", avatarimage.current.files[0]);
    const res = await fetch("http://62.113.105.56:5000/client_comment", {
      method: "POST",
      body: formData,
    });
    let x= await res.json();
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
    e.target[12].value = null;
    console.log(x);
  };

  return (
    <>
      <Wrapper>
        <button onClick={handleOpen}>???????????????? ??????????????????</button>
        <ModalCommon
          scroll="scroll"
          height="400px"
          handleClose={handleClose}
          open={open}
          width={"400px"}
        >
          <ModalTop>
            <span>???????????????? ????????????????</span>
            <span onClick={handleClose}>&times;</span>
          </ModalTop>
          <Form className="form" onSubmit={handleUpload}>
            <input type="file" id="fileImage" ref={image} />
            <label for="fileImage" class="custom-file-upload">
              <span className="span-download">
                <ion-icon name="cloud-download-outline"></ion-icon>
              </span>
              ?????????????????? ??????????????????????
            </label>

            <hr />
            <input type="file" id="fileAvatar" ref={avatarimage} />
            <label for="fileAvatar" class="custom-file-upload">
              <span className="span-download">
                <ion-icon name="cloud-download-outline"></ion-icon>
              </span>
              ?????????????????? ????????????
            </label>

            {loading ? (
              <>
                <span className="loading">????????????????...</span>
              </>
            ) : null}
            <span ref={load} style={{ display: "none" }}>
              ????????????????...
            </span>



            <input type="text" placeholder="?????????????????? ????" ref={titleuz} />
            <input type="text" placeholder="?????????????????? ????" ref={titleru} />
            <input type="text" placeholder="?????????????????? ????" ref={titleen} />
            <input type="text" placeholder="???????????????? ?????????????????????? ????" ref={clientcommentuz} />
            <input type="text" placeholder="???????????????? ?????????????????????? ????" ref={clientcommentru} />
            <input type="text" placeholder="???????????????? ?????????????????????? ????" ref={clientcommenten} />
            <input type="text" placeholder="???????????????? ?????? ??????????????" ref={clientnamesurname} />
            <input type="text" placeholder="????????????" ref={mounting} />
            <input type="text" placeholder="??????????" ref={volume} />
            <input type="text" placeholder="???????????????? ??????????????" ref={creatingCanvas} />
            <input type="text" placeholder="??????" ref={money} />
            <button type="submit">??????????????????</button>
          </Form>
        </ModalCommon>
      </Wrapper>
    </>
  );
}
export default CommentModal;