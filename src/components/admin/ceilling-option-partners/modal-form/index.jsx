import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../common/modal";
import axios from "axios";
import { RegionContext } from "../../../../context/client/region/context";
function PartnersModal() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { RegionMap } = useContext(RegionContext);

  const [regionId, setRegionId] = useState("");
  const titleuz = useRef();
  const titleen = useRef();
  const titleru = useRef();
  const phone = useRef();
  const image = useRef();
  const avatarImage = useRef();
  const partnerName = useRef();
  const load = useRef();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("titleUz", titleuz.current.value);
    form.append("titleEn", titleen.current.value);
    form.append("titleRu", titleru.current.value);
    form.append("phone", phone.current.value);
    form.append("partner_name", partnerName.current.value);
    form.append("image", image.current.files[0]);
    form.append("avatar_image", avatarImage.current.files[0]);
    form.append("region_id", Number(regionId));
    try {
      await fetch("https://api.mirpotolkov.uz/partners", {
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
      e.target[7].value = null;
      e.target[8].value = null;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <button onClick={handleOpen}>Добавить Партнеры</button>

      <ModalCommon
        scroll="scroll"
        height="450px"
        handleClose={handleClose}
        open={open}
        width={"600px"}
      >
        <ModalTop>
          <span>Добавить Партнеры</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTop>
        <hr />
        <Form
          className="form"
          enctype="multipart/form-data"
          onSubmit={HandleSubmit}
        >
          <select onChange={(e) => setRegionId(e.target.value)}>
            {RegionMap.map((elem, index) => (
              <option key={index} value={elem.id}>
                {elem.region_name_ru}
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
          <br />
          <input type="file" id="Avatarfile" ref={avatarImage} />
          <label for="Avatarfile" class="custom-file-upload">
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
            ref={phone}
            type="tel"
            placeholder="номер телефона"
            required
          />
          <input
            ref={partnerName}
            type="text"
            placeholder="имя партнера"
            required
          />
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default PartnersModal;
