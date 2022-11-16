import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../common/modal";
import axios from "axios";
import { ChooseContext } from "../../../../context/client/choose/context";
function CategoryRegionModal() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { ChooseMap } = useContext(ChooseContext);

 
 
  const titleuz = useRef();
  const titleru = useRef();
  const titleen = useRef();
  const load = useRef();
  const HandleSubmit = async (e)=>{
    e.preventDefault();
    const req = {
      titleUz: titleuz.current.value,
      titleRu: titleru.current.value,
      titleEn: titleen.current.value
    }
    const response = await axios.post("https://api.mirpotolkov.uz/ceiling_option" , req)
    if (response) {
      handleClose()
    }
  }



  return (
    <Wrapper>
      <button style={{marginLeft: '10px'}} onClick={handleOpen}>Добавить категория</button>

      <ModalCommon
        scroll="scroll"
        height="400px"
        handleClose={handleClose}
        open={open}
      >
        <ModalTop>
          <span>Добавить категория</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTop>
        <hr />
        <Form
          className="form"
          enctype="multipart/form-data"
          onSubmit={HandleSubmit}
        >
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
          
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default CategoryRegionModal;
