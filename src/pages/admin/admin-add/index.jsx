import { useContext, useState } from "react"
import { AdminContext } from "../../../context/admin/adminAdd/context"
import { Wrapper } from "./styled-index"
import ModalForm from "./../../../components/admin/admin/modal-form/index"
import AdminDeletComponent from "../../../components/admin/admin/admin-delet-put"
function AdminAdmins() {
    const {AdminMap} = useContext(AdminContext)
    return(
        <>
        <Wrapper>
            <ModalForm/>
            <table id="table">
                    <thead id="thead">
                      <th id="th">Имя</th>
                      <th>Эл. адрес</th>
                      <th>Удалить</th>
                    </thead>
                    <tbody id="tbody">
                        {AdminMap.map((elem) =>
                      <tr>
                        <td>{elem.name}</td>
                          <td>{elem.email}</td>
                          <td><AdminDeletComponent DeleteId={elem.id}/></td>
                     </tr>
                        )}
                    </tbody>
                   </table>
        </Wrapper>
        </>
    )
}
export default AdminAdmins