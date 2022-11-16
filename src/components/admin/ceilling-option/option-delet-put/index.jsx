import { useContext, useEffect, useState } from "react";
import ModalDelete from "./Modal-delet";
import { Wrapper} from "./styled-index";
import ModalPut from "./modal-put";
import { ChooseContext } from "../../../../context/client/choose/context";
function OptionDeletPutComponent() {
    const [open , SetOpen] = useState(false)
    const [open2 , SetOpen2] = useState(false)
    const [DeletId , setDeleteId] = useState(); 
    const [PutBlog , setPutBlog] = useState();
    const {ChooseMap} = useContext(ChooseContext);

    const HandleOpen = (e) => {
        SetOpen(true)
        setPutBlog(e.target.value)
    }
    const HandleClose = () => {
        SetOpen(false)
    }
    const HandleOpen2 = (e) => {
        SetOpen2(true)
        setDeleteId(e.target.value)
    }
    const HandleClose2 = () => {
        SetOpen2(false)
    }
     return(
        <Wrapper>
                <div >
                <select onChange={HandleOpen2}>
                <option  selected disabled> Категория Удалить</option>
                {ChooseMap.map((elem, index) => (
                  <option key={index} value={elem.id}>{elem.titleru}</option>
                ))}
              </select>
              <select onChange={HandleOpen}>
                <option  selected disabled> Категория Изминеть</option>
                {ChooseMap.map((elem, index) => (
                    <>
                          <option key={index}  value={elem.id}>{elem.titleru}</option>

                    </>
                ))}
              </select>
                </div>
                <ModalDelete open={open2} HandleClose={HandleClose2}   DeleteId={DeletId}/>
              <ModalPut open={open} handleClose={HandleClose} Element={ChooseMap} PutBlog={PutBlog} />
        </Wrapper>
    )
}
export default OptionDeletPutComponent