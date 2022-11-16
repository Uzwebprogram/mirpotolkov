import { useRef, useState } from "react";
import {Wrapper , ModalTop , Form} from "./styled-index"
import ModalCommon from "../../common/modal";

function ModalForm() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const adminName = useRef();
    const passwordError  = useRef();
    const email  = useRef();
    const password  = useRef();
    const HandleSubmit = async (e) =>{
        e.preventDefault()
        try {
           await fetch('https://x8ki-letl-twmt.n7.xano.io/api:oMrL5JvU/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name :  adminName.current.value, 
                  email : email.current.value,
                  password : password.current.value, 
                })
            })
            .then(res => res.text())
            .then(result =>  {
                if (JSON.parse(result).authToken) {
                    window.location.reload()
                }
                if(JSON.parse(result).message) {
                    passwordError.current.style.display = "block"
                }
            });
          } catch(err) {
            console.log(err)
        }
    }

    return(
        <Wrapper>
        <button onClick={handleOpen}>Добавить администратора</button>

        <ModalCommon handleClose={handleClose} open={open} >
            <ModalTop>
                    <span>Добавить администратора</span>
                    <span onClick={handleClose}>&times;</span>
            </ModalTop>
            <hr />
            <Form className="form" onSubmit={HandleSubmit}>
                <input ref={adminName} type="text" placeholder="Имя" required />
                <input ref={email} type="email" placeholder="Эл. адрес" required />
                <input ref={password} type="password" placeholder="пароль" required />
                <span className="error" ref={passwordError}>пароль должен содержать 8 цифр и 1 букву</span>
                <button type="submit">Сохранять</button>
            </Form>
        </ModalCommon>
        </Wrapper>
    )
}
export default ModalForm