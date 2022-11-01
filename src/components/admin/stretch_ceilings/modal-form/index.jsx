import { useRef, useState } from "react";
import {Wrapper , ModalTop , Form} from "./styled-index"
import ModalCommon from "../../common/modal";
import axios from "axios";
function StretchModal() {
    const [selectedImages , setSelectedImages] = useState()
    const [loading , setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const WorkerName  = useRef();
    const WorkerPosition  = useRef();
    const load = useRef();
    const HandleSubmit = async (e) =>{
        e.preventDefault()
        try {
           await fetch('http://localhost:8000/stretch_ceilings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    imageAvatar :  selectedImages, 
                    WorkerName : WorkerName.current.value,
                    WorkerPosition :  WorkerPosition.current.value, 
                })
            })
            .then(res => res.text())
            .then(result =>  console.log(result));
            e.target[0].value = null
            e.target[1].value = null
            e.target[2].value = null
            e.target[3].value = null
          } catch(err) {
            console.log(err)
        }
    }

        const HandleChange = (e) =>{
                const formData = new FormData()
                formData.append("file" , e.target.files[0])
                formData.append("upload_preset" , "v8gxbibt")
                setLoading(true)
                const postImage = async () =>{
                    try{
                        const response = await axios.post("https://api.cloudinary.com/v1_1/dugfn5qgj/upload" , formData)
                        setSelectedImages(response?.data.secure_url)
                        setLoading(false)
                    }catch(error){
                        console.error(error);
                    }
                }
                postImage()
        }
    return(
        <Wrapper>
        <button onClick={handleOpen}>Добавить работника</button>

        <ModalCommon scroll="scroll" height="400px"  handleClose={handleClose} open={open} >
            <ModalTop>
                    <span>Добавить потолков</span>
                    <span onClick={handleClose}>&times;</span>
            </ModalTop>
            <Form className="form" onSubmit={HandleSubmit}>
                <input type="file" id="file" onChange={HandleChange}/>
                <label for="file" class="custom-file-upload">
                    <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
                загрузить изображение
                </label>
                {loading ? (<>
                    <span className="loading">загрузка...</span>
                </>):null}
 

                <span ref={load} style={{display : "none"}}>загрузка...</span>
                <input  ref={WorkerName} type="text" placeholder="название потолка уз" required />
                <input  ref={WorkerName} type="text" placeholder="название потолка ру" required />
                <input  ref={WorkerName} type="text" placeholder="название потолка ен" required />
                <input  ref={WorkerName} type="text" placeholder="Денги" required />
                <input  ref={WorkerPosition} type="text" placeholder="Скидка" required />
                <input  ref={WorkerPosition} type="text" placeholder="Оттенков" required />
                <button type="submit">Сохранять</button>
            </Form>
        </ModalCommon>
        </Wrapper>
    )
}
export default StretchModal