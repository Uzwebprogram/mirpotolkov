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

 
 
  const regionuz = useRef();
  const regionru = useRef();
  const regionen = useRef();
  const load = useRef();
  const HandleSubmit = async (e)=>{
    e.preventDefault();
    const req = {
      region_name_uz: regionuz.current.value,
      region_name_ru: regionru.current.value,
      region_name_en: regionen.current.value
    }
    const response = await axios.post("https://api.mirpotolkov.uz/region" , req)
    if (response) {
      handleClose()
    }
  }



  return (
    <Wrapper>
      <button style={{marginLeft: '10px'}} onClick={handleOpen}>Добавить region</button>

      <ModalCommon
        scroll="scroll"
        height="400px"
        handleClose={handleClose}
        open={open}
      >
        <ModalTop>
          <span>Добавить region</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTop>
        <hr />
        <Form
          className="form"
          enctype="multipart/form-data"
          onSubmit={HandleSubmit}
        >
          <input
            ref={regionuz}
            type="text"
            placeholder="название region уз"
            required
          />
          <input
            ref={regionru}
            type="text"
            placeholder="название region ру"
            required
          />
          <input
            ref={regionen}
            type="text"
            placeholder="название region ен"
            required
          />
          
          <button type="submit">Сохранять</button>
        </Form>
      </ModalCommon>
    </Wrapper>
  );
}
export default CategoryRegionModal;
