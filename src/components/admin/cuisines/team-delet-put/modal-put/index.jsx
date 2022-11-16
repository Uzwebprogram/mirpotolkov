import { useRef, useState} from "react";
import {Wrapper , ModalTop , Form} from "./styled-index"
import ModalCommon from "../../../common/modal";
function ModalPut({handleClose , open , PutBlog , Title , Element}) {
    const [titleuz, setTitleUz]  = useState(Element);
    const [titleru, setTitleRu]  = useState(Element);
    const [titleen, setTitleEn]  = useState(Element);

    const image  = useRef();
    const HandleSubmit = async (e , id ) =>{
        e.preventDefault()
        let form = new FormData()
        form.append("titlecuisineuz" , titleuz)
        form.append("titlecuisineen" , titleen)
        form.append("titlecuisineru" , titleru)
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
            <hr />
            <Form className="form"  onSubmit={(e) => HandleSubmit(e , PutBlog)}>
            <input type="file" id="file" ref={image}/>
                <label for="file" class="custom-file-upload">
                    <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
                загрузить изображение
                </label>
                <input  value={titleuz.titlecuisineuz} name='titleuz' onChange={(e) => setTitleUz(e.target.value)} type="text"  required />
                <input  value={titleru.titlecuisineru} name='titleru' onChange={(e) => setTitleRu(e.target.value)} type="text"  required />
                <input  value={titleen.titlecuisineen} name='titleen' onChange={(e) => setTitleEn(e.target.value)} type="text" required />
                <button type="submit">Сохранять</button>
            </Form>
        </ModalCommon>
        </Wrapper>
    )
}
export default ModalPut