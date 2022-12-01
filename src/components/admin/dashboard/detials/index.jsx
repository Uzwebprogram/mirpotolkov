import { useContext } from "react"
import { AdminContext } from "../../../../context/admin/adminAdd/context"
import {Wrapper} from "./styled-index"

function Detials() {
    const {AdminMap} = useContext(AdminContext)
    return(
        <Wrapper>
                        <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Добавить администратора</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>имя</td>
                                <td>ел.почта</td>
                            </tr>
                        </thead>

                        <tbody>
                            {AdminMap.map(elem => 
                             <tr>
                                <td>
                                    <span>{elem.name}</span>
                                    </td>
                                    <td>
                                    <span>{elem.email}</span>
                                    </td>
                                </tr>
                                ) }
                        </tbody>
                    </table>
                </div>

                <div class="recentCustomers">
                    <div class="cardHeader">
                        <h2>Добавить администратора</h2>
                    </div>

                    <table>
                    <thead>
                            <tr>
                                <td>имя</td>
                                <td>ел.почта</td>
                            </tr>
                        </thead>
                    {AdminMap.map(elem => 
                             <tr>
                            <td>
                                    <p>{elem.name}</p>
                                    </td>
                                    <td>
                                    <p>{elem.email}</p>
                                    </td>
                                </tr>
                                ) }
            </table>
                </div>
            </div>
        </Wrapper>
    )
}
export default Detials