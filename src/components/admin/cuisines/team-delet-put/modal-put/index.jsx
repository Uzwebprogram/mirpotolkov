import { useRef, useState} from "react";
import {Wrapper , ModalTop , Form} from "./styled-index"
import ModalCommon from "../../../common/modal";
function ModalPut({handleClose , open , PutBlog , Title , Element}) {
    const titleuz  = useRef();
    const titleru  = useRef();
    const titleen  = useRef();
    const image  = useRef();
    const HandleSubmit = async (e , id ) =>{
        e.preventDefault()
        let form = new FormData()
        form.append("titleCuisineUz" , titleuz.current.value)
        form.append("titleCuisineEn" , titleen.current.value)
        form.append("titleCuisineRu" , titleru.current.value)
        form.append("image" ,  image.current.files[0])
        try {
           await fetch(`https://api.mirpotolkov.uz/cuisine/${id}`, {
                method: 'PUT',
                body: form
            })
            .then(res => res.text())
            .then(result => console.log(result));
          } catch(err) {
            console.log(err)
        }
    }
    return(
        <Wrapper>
        <ModalCommon height={400} width={350} scroll="scroll" handleClose={handleClose} open={open}>
            <ModalTop>
                    <span>Изменить КЛИЕНТЫ</span>
                    <span onClick={handleClose}>&times;</span>
            </ModalTop>
            <hr />
            <Form className="form"  onSubmit={(e) => HandleSubmit(e , PutBlog)}>
            <input type="file" id="file" ref={image}/>
                <label for="file" class="custom-file-upload">
                    <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
                загрузить изображение
                </label>
                <input  ref={titleuz} placeholder={Element.titlecuisineuz} name='titleuz' type="text"  />
                <input  ref={titleru} placeholder={Element.titlecuisineru} name='titleru' type="text"  />
                <input  ref={titleen} placeholder={Element.titlecuisineen} name='titleen' type="text" />
                <button type="submit">Сохранять</button>
            </Form>
        </ModalCommon>
        </Wrapper>
    )
}
export default ModalPut