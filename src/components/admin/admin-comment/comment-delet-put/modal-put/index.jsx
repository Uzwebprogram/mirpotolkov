import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../../common/modal";
import { ChooseContext } from "../../../../../context/client/choose/context";

function ModalPut({ handleClose, open, PutBlog, Title, Element }) {
    const titleuz = useRef();
    const titleen = useRef();
    const titleru = useRef();
    const descriptionuz = useRef();
    const descriptionen = useRef();
    const descriptionru = useRef();
    const money = useRef();
    const image = useRef();
    const load = useRef();
  const [loading, setLoading] = useState(false);
  const [ceilingId, setCeilingId] = useState("");

  const { ChooseMap} = useContext(ChooseContext)

  const HandleSubmit = async (e, id) => {
    e.preventDefault();
    let form = new FormData();
    form.append("titleCuisineUz", titleuz.current.value);
    form.append("titleCuisineEn", titleen.current.value);
    form.append("titleCuisineRu", titleru.current.value);
    form.append("descriptionUz", descriptionuz.current.value);
    form.append("descriptionEn", descriptionen.current.value);
    form.append("descriptionRu", descriptionru.current.value);
    form.append("money", money.current.value);
    form.append("image", image.current.files[0]);
    form.append("ceiling_id", Number(ceilingId));
    try {
      await fetch(`https://mebel-b.herokuapp.com/cuisine/${id}`, {
        method: "PUT",
        body: form,
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
        <Form
          className="form"
          enctype="multipart/form-data"
          onSubmit={(e) => HandleSubmit(e , PutBlog)}
        >
          <select onChange={(e) => setCeilingId(e.target.value)}>
            {ChooseMap.map((elem, index) => (
              <option key={index} value={elem.id}>
                {elem.titleru}
              </option>
            ))}
          </select>
          <input type="file" id="file" ref={image} />
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
            ref={titleuz}
            type="text"
            placeholder={Element.titleuz}
            required
          />
          <input
            ref={titleru}
            type="text"
            placeholder={Element.titleru}
            required
          />
          <input
            ref={titleen}
            type="text"
            placeholder={Element.titleen}
            required
          />
          <input
            ref={descriptionuz}
            type="text"
            placeholder={Element.descriptionuz}
            required
          />
          <input
            ref={descriptionru}
            type="text"
            placeholder={Element.descriptionru}
            required
          />
          <input
            ref={descriptionen}
            type="text"
            placeholder={Element.descriptionen}
            required
          />
          <input ref={money} type="text" placeholder={Element.money} required />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalPut;
