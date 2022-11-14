import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../common/modal";
import axios from "axios";
import { ChooseContext } from "../../../../context/client/choose/context";
function PartnersModal() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { ChooseMap } = useContext(ChooseContext);

  const [ceilingId, setCeilingId] = useState("");
  const titleuz = useRef();
  const titleen = useRef();
  const titleru = useRef();
  const descriptionuz = useRef();
  const descriptionen = useRef();
  const descriptionru = useRef();
  const money = useRef();
  const image = useRef();
  const load = useRef();
  const HandleSubmit = async (e) => {
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
    form.append("ceiling_id", Number(ceilingId))
    try {
      await fetch("https://api.mirpotolkov.uz/cuisine", {
        method: "POST",
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
        width={"400px"}

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
            ref={descriptionuz}
            type="text"
            placeholder="название потолка уз"
            required
          />
          <input
            ref={descriptionru}
            type="text"
            placeholder="название потолка ру"
            required
          />
          <input
            ref={descriptionen}
            type="text"
            placeholder="название потолка ен"
            required
          />
          <input ref={money} type="text" placeholder="Денги" required />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default PartnersModal;
