import { useContext } from "react"
import { Container , Wrapper } from "./styled-index"
import StretchModal from "../../../components/admin/stretch_ceilings/modal-form/index"
import TeamDeletPutComponent from "../../../components/admin/stretch_ceilings/team-delet-put/index"
import { StretchContext } from "../../../context/client/stretch_ceilings/context"
function StretchCeilings() {
    const { StretchMap }  = useContext(StretchContext)
    return(
        <>
          <Wrapper>
                <StretchModal/>
                <Container>
                <table id="table">
                    <thead id="thead">
                      <th id="th">Изображение <span>название потолка</span></th>
                      <th>Деньги</th>
                      <th>скидка</th>
                      <th>оттенки</th>
                      <th id="th">Изменить Удалить</th>
                    </thead>
                    <tbody id="tbody">
                        {StretchMap.map((elem) =>
                      <tr>
                        <td><img src={`http://62.113.105.56:5000/static/${elem.image}`} style={{marginRight : "20px"}} width={48} height={48} alt="img avatar" /><span>{elem.titleuz}</span> </td>
                          <td>{elem.money} сум</td>
                          <td>{elem.skidka}</td>
                          <td>{elem.shades}</td>
                        <td><TeamDeletPutComponent Element={elem} DeleteId={elem.id} PutBlog={elem.id}/></td>
                     </tr>
                        )}
                    </tbody>
                   </table>
                </Container>
        </Wrapper>
        </>
    )
}
export default StretchCeilings