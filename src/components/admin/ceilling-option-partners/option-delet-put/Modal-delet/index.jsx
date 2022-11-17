import ModalCommon from "../../../common/modal";
import { Wrapper, ModalContent, Buttons } from "./styled-index";
import { ModalTop } from "../modal-put/styled-index";
function ModalDelete({ open, HandleClose, DeleteId, ChooseMap }) {
  // const findDelete = ChooseMap.find((elem) => elem.id == DeleteId);
//  console.log(findDelete.titleen);
  const DeleteBlog = (DeleteId) => {
    fetch(`https://api.mirpotolkov.uz/region/${DeleteId}`, {
      method: "DELETE",
    }).catch((DeleteId) => console.error(DeleteId));
  };
  return (
    <Wrapper>
      <ModalCommon width={300} open={open} handleClose={HandleClose}>
        <ModalTop>
          <span>Удалить region</span>
        </ModalTop>
        <hr />
        <ModalContent>
          <h3>
          Вы уверены, что хотите удалить данные?
            {/* Вы уверены, что хотите удалить категорию */}
            {/* <span> {findDelete.titleen}</span> */}
          </h3>
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
