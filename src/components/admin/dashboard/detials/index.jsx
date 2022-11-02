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
                        <h2>Наша Команда</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>картинка рабочих Имя</td>
                                <td>должность</td>
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
                        <h2>Наши работы</h2>
                    </div>

                    <ul>
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
            </ul>
                </div>
            </div>
        </Wrapper>
    )
}
export default Detials