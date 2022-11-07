import { useContext } from "react"
import { Container , Wrapper } from "./styled-index"
import { StretchContext } from "../../../context/client/stretch_ceilings/context"
import { ContactContext } from "../../../context/admin/contact_us/context"
function Contact() {
    const { ContactMap }  = useContext(ContactContext)
    return(
        <>
          <Wrapper>
                <Container>
                <table id="table">
                    <thead id="thead">
                      <th>Номер телефон</th>
                      <th>время</th>
                    </thead>
                    <tbody id="tbody">
                        {ContactMap.map((elem) =>
                      <tr>
                          <td>{elem.telephone}</td>
                          <td>{elem.date}</td>
                     </tr>
                        )}
                    </tbody>
                   </table>
                </Container>
        </Wrapper>
        </>
    )
}
export default Contact