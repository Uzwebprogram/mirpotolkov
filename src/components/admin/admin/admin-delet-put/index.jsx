import { useState } from "react";
import ModalDelete from "./Modal-delet";
import { Wrapper} from "./styled-index";
function AdminDeletComponent({DeleteId}) {
    const [open2 , SetOpen2] = useState(false)



    const HandleOpen2 = () => {
        SetOpen2(true)
    }
    const HandleClose2 = () => {
        SetOpen2(false)
    }
     return(
        <Wrapper>
            <button onClick={HandleOpen2}>Удалить</button>
            <ModalDelete open={open2} HandleClose={HandleClose2}   DeleteId={DeleteId}/>
        </Wrapper>
    )
}
export default AdminDeletComponent