import ModalCommon from "../../../common/modal";
import { Wrapper, ModalContent, Buttons } from "./styled-index";
import {ModalTop} from '../modal-put/styled-index'
function ModalDelete({ open, HandleClose, DeleteId }) {
  const DeleteBlog = (DeleteId) => {
    fetch(`https://api.mirpotolkov.uz/client_comment/${DeleteId}`, {
      method: "DELETE",
    }).catch((DeleteId) => console.error(DeleteId));
  };
  return (
    <Wrapper>
      <ModalCommon width={"320px"} open={open} handleClose={HandleClose}>
        <ModalTop>
          <span>Удалить</span>
        </ModalTop>
        <hr />
        <ModalContent>
          <h3>Вы уверены, что хотите удалить данные?</h3>
          <Buttons>
            <button onClick={() => DeleteBlog(DeleteId)}>Да</button>
            <button onClick={HandleClose}>Нет</button>
          </Buttons>
        </ModalContent>
      </ModalCommon>
    </Wrapper>
  );
}
export default ModalDelete;
