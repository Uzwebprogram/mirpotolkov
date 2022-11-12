import ModalCommon from "../../../common/modal"
import { Wrapper , ModalContent , Buttons } from "./styled-index"

function ModalDelete({open , HandleClose , DeleteId}) {
    const DeleteBlog = (DeleteId) => {
        fetch(`https://api.mirpotolkov.uz/ceiling_option/${DeleteId}`, {
            method: "DELETE",
        }).catch((DeleteId) => console.error(DeleteId));
    };
    return(
        <Wrapper>
            <ModalCommon width={300}  open={open} handleClose={HandleClose}>
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