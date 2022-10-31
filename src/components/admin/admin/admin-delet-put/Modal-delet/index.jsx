import ModalCommon from "../../../common/modal"
import { Wrapper , ModalContent , Buttons } from "./styled-index"

function ModalDelete({open , HandleClose , DeleteId}) {
    const DeleteBlog = (DeleteId) => {
        fetch(`https://x8ki-letl-twmt.n7.xano.io/api:oMrL5JvU/user/${DeleteId}`, {
            method: "DELETE",
        }).catch((DeleteId) => console.error(DeleteId));
        
        setTimeout(() => {
            window.location.reload() 
          }, "1000")
    };
    return(
        <Wrapper>
                    <ModalCommon  open={open} handleClose={HandleClose}>
                <ModalContent>
                <h3>Вы уверены, что хотите удалить данные?</h3>
                    <Buttons>
                    <button onClick={() => DeleteBlog(DeleteId)}>Да</button>
                    <button onClick={HandleClose}>Нет</button>
                    </Buttons>
                </ModalContent>
            </ModalCommon>
        </Wrapper>
    )
}
export default ModalDelete