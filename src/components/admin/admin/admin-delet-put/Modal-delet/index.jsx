import ModalCommon from "../../../common/modal";
import { Wrapper, ModalContent, Buttons } from "./styled-index";
import {ModalTop} from '../../modal-form/styled-index'
function ModalDelete({ open, HandleClose, DeleteId }) {
  const DeleteBlog = (DeleteId) => {
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:oMrL5JvU/user/${DeleteId}`, {
      method: "DELETE",
    }).catch((DeleteId) => console.error(DeleteId));

    setTimeout(() => {
      window.location.reload();
    }, "1000");
  };
  return (
    <Wrapper>
      <ModalCommon width={"320px"} open={open} handleClose={HandleClose}>
        <ModalTop>
          <span>Удалить администратора</span>
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
