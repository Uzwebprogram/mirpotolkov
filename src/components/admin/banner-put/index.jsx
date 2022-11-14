import { useRef, useState} from "react";
import {Wrapper , ModalTop , Form} from "./styled-index"
import ModalCommon from "../../../components/admin/common/modal";
function BannerPut({PutBlog}) {
    const image  = useRef();
    const [open , SetOpen2] = useState(false)
    const HandleOpen = () => {
        SetOpen2(true)
    }
    const HandleClose = () => {
        SetOpen2(false)
    }

    const HandleSubmit = async (e , id ) =>{
        e.preventDefault()
        console.log(id);
        let form = new FormData()
        form.append("image" ,  image.current.files[0])
        try {
           await fetch(`https://mebel-b.herokuapp.com/banners/${id}`, {
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
            <button onClick={HandleOpen}>Изменить</button>
        <ModalCommon height={400} scroll="scroll" handleClose={HandleClose} open={open}>
            <ModalTop>
                    <span>Изменить КЛИЕНТЫ</span>
                    <span onClick={HandleClose}>&times;</span>
            </ModalTop>
            <Form className="form" onSubmit={(e) => HandleSubmit(e , PutBlog)}>
            <input type="file" id="file" ref={image}/>
                <label for="file" class="custom-file-upload">
                    <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
                загрузить изображение
                </label>
                <button type="submit">Сохранять</button>
            </Form>
        </ModalCommon>
        </Wrapper>
    )
}
export default BannerPut