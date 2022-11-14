import { useRef, useState} from "react";
import {Wrapper , ModalTop , Form} from "./styled-index"
import ModalCommon from "../../../common/modal";
function ModalPut({handleClose , open , PutBlog , Title , Element}) {
    const titleuz  = useRef();
    const titleen  = useRef();
    const titleru  = useRef();
    const money  = useRef();
    const descriptionru  = useRef();
    const descriptionen  = useRef();
    const descriptionuz  = useRef();
    const shades  = useRef();
    const image  = useRef();
    const HandleSubmit = async (e , id ) =>{
        e.preventDefault()
        let form = new FormData()
        form.append("titleUz" , titleuz.current.value)
        form.append("titleEn" , titleen.current.value)
        form.append("titleRu" , titleru.current.value)
        form.append("money" ,  money.current.value)
        form.append("descriptionRu" ,  descriptionru.current.value)
        form.append("descriptionUz" ,  descriptionuz.current.value)
        form.append("descriptionEn" ,  descriptionen.current.value)
        form.append("image" ,  image.current.files[0])
        try {
           await fetch(`https://api.mirpotolkov.uz/cuisine/${id}`, {
                method: 'PUT',
                body: form
            })
            .then(res => res.text())
            .then(result => console.log(result));
            e.target[0].value = null
            e.target[1].value = null
            e.target[2].value = null
            e.target[3].value = null
            e.target[4].value = null
            e.target[5].value = null
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
            <Form className="form"  onSubmit={(e) => HandleSubmit(e , PutBlog)}>
            <input type="file" id="file" ref={image}/>
                <label for="file" class="custom-file-upload">
                    <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
                загрузить изображение
                </label>
                <input  ref={titleuz} type="text" placeholder={Element.titlecuisineuz}  required />
                <input  ref={titleru} type="text" placeholder={Element.titlecuisineru}  required />
                <input  ref={titleen} type="text" placeholder={Element.titlecuisineen} required />
                <input  ref={money} type="text" placeholder={Element.money} required />
                <input  ref={descriptionru} type="text" placeholder={Element.descriptionru} required />
                <input  ref={descriptionen} type="text" placeholder={Element.descriptionen} required />
                <input  ref={descriptionuz} type="text" placeholder={Element.descriptionuz} required />
                <button type="submit">Сохранять</button>
            </Form>
        </ModalCommon>
        </Wrapper>
    )
}
export default ModalPut