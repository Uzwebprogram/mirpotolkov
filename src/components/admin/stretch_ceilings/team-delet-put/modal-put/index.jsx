import { useRef, useState} from "react";
import {Wrapper , ModalTop , Form} from "./styled-index"
import ModalCommon from "../../../common/modal";
function ModalPut({handleClose , open , PutBlog , Title , Element}) {
    const image  = useRef();
    const [titleuz , setTitleUz] = useState(Element)
    const [titleen , setTitleEn] = useState(Element)
    const [titleru , setTitleRu] = useState(Element)
    const [money , setMoney] = useState(Element)
    const [skidka , setSkidka] = useState(Element)
    const [shades , setShades] = useState(Element)
    const HandleSubmit = async (e , id ) =>{
        e.preventDefault()
        let form = new FormData()
        form.append("titleUz" , titleuz)
        form.append("titleEn" , titleen)
        form.append("titleRu" , titleru)
        form.append("money" ,  money)
        form.append("skidka" ,  skidka)
        form.append("shades" ,  shades)
        form.append("image" ,  image.current.files[0])
        try {
           await fetch(`https://api.mirpotolkov.uz/stretch_ceilings/${id}`, {
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
        <ModalCommon height={400} scroll="scroll" handleClose={handleClose} open={open}>
            <ModalTop>
                    <span>Изменить КЛИЕНТЫ</span>
                    <span onClick={handleClose}>&times;</span>
            </ModalTop>
            <Form className="form" onSubmit={(e) => HandleSubmit(e , PutBlog)}>
            <input type="file" id="file" ref={image}/>
                <label for="file" class="custom-file-upload">
                    <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
                загрузить изображение
                </label>
                <input  type="text"  onChange={(e) => setTitleUz(e.target.value)} name="titleuz" value={titleuz.titleuz}  required />
                <input   type="text" onChange={(e) => setTitleRu(e.target.value)}  value={titleru.titleru}  required />
                <input   onChange={(e) => setTitleEn(e.target.value)} type="text" value={titleen.titleen} required />
                <input  onChange={(e) => setMoney(e.target.value)} type="text" value={money.money} required />
                <input   onChange={(e) => setSkidka(e.target.value)}  type="text" value={skidka.skidka} required />
                <input  onChange={(e) => setShades(e.target.value)}  type="text" value={shades.shades} required />
                <button type="submit">Сохранять</button>
            </Form>
        </ModalCommon>
        </Wrapper>
    )
}
export default ModalPut