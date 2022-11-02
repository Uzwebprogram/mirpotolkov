import { useContext, useRef, useState } from "react";
import { Wrapper, ModalTop, Form } from "./styled-index";
import ModalCommon from "../../common/modal";
import axios from "axios";
import { ChooseContext } from "../../../../context/client/choose/context";
function CategoryModal() {
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
    const response = await axios.post("https://mebel-b.herokuapp.com/ceiling_option" , req)
    // if (response) {
    // }
    console.log(response);
  }


 
  // const HandleSubmit = async (e) => {
  //   e.preventDefault();
  //   let form = new FormData();
  //   form.append("titleUz", titleuz.current.value);
  //   form.append("titleRu", titleru.current.value);
  //   form.append("titleEn", titleen.current.value);
   
  //   try {
  //     await fetch("https://mebel-b.herokuapp.com/ceiling_option", {
  //       method: "POST",
  //       body: form,
  //     })
  //       .then((res) => res.text())
  //       .then((result) => console.log(result));
  //     e.target[0].value = null;
  //     e.target[1].value = null;
  //     e.target[2].value = null;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
export default CategoryModal;
