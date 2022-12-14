import { useRef, useState } from "react";
import {Wrapper , ModalTop , Form} from "./styled-index"
import ModalCommon from "../../common/modal";
import axios from "axios";
function StretchModal() {
    const [loading , setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const titleuz  = useRef();
    const titleen  = useRef();
    const titleru  = useRef();
    const money  = useRef();
    const skidka  = useRef();
    const shades  = useRef();
    const image  = useRef();
    const load = useRef();
    const HandleSubmit = async (e) =>{
        e.preventDefault()
        let form = new FormData()
        form.append("titleUz" , titleuz.current.value)
        form.append("titleEn" , titleen.current.value)
        form.append("titleRu" , titleru.current.value)
        form.append("money" ,  money.current.value)
        form.append("skidka" ,  skidka.current.value)
        form.append("shades" ,  shades.current.value)
        form.append("image" ,  image.current.files[0])
        try {
           await fetch('http://62.113.105.56:5000/stretch_ceilings', {
                method: 'POST', 
                body: form,
            })
            .then(res => res.text())
            .then(result =>  console.log(result));
            e.target[0].value = null
            e.target[1].value = null
            e.target[2].value = null
            e.target[3].value = null
            e.target[4].value = null
            e.target[5].value = null
            e.target[6].value = null
          } catch(err) {
            console.log(err)
        }
    }

    return(
        <Wrapper>
        <button onClick={handleOpen}>Добавить потолков</button>

          
        <ModalCommon width={"400px"} scroll="scroll" height="400px"  handleClose={handleClose} open={open} >
            <ModalTop>
                    <span>Добавить потолков</span>
                    <span onClick={handleClose}>&times;</span>
            </ModalTop>
            <Form className="form" enctype="multipart/form-data" onSubmit={HandleSubmit}>
                <input type="file" id="file" ref={image} />
                <label for="file" class="custom-file-upload">
                    <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
                загрузить изображение
                </label>
                {loading ? (<>
                    <span className="loading">загрузка...</span>
                </>):null}
                <span ref={load} style={{display : "none"}}>загрузка...</span>
                <input  ref={titleuz} type="text" placeholder="название потолка уз" required />
                <input  ref={titleru} type="text" placeholder="название потолка ру" required />
                <input  ref={titleen} type="text" placeholder="название потолка ен" required />
                <input  ref={money} type="text" placeholder="Денги" required />
                <input  ref={skidka} type="text" placeholder="Скидка" required />
                <input  ref={shades} type="text" placeholder="Оттенков" required />
                <button type="submit">Сохранять</button>
            </Form>
        </ModalCommon>
        </Wrapper>
    )
}
export default StretchModal