import {Wrapper} from "./styled-index"

function Detials() {
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
                            {/* {TeamMap.map(elem => 
                             <tr>
                                    <td>
                                    <img alt="" src={elem.imageavatar} width={50} style={{borderRadius:"50%"}} height={50} />
                                    <span>{elem.workername}</span>
                                    </td>
                                    <td>{elem.workerposition}</td>
                                </tr>
                                ) } */}
                        </tbody>
                    </table>
                </div>

                <div class="recentCustomers">
                    <div class="cardHeader">
                        <h2>Наши работы</h2>
                    </div>

                    <ul>
            {/* {SitesMap.map((elem) =>(
                <li>
                    <a href={elem.link} target="_blank">
                    <img className="image" src={elem.background} width={258} height={144} alt="" />
                    <span>{elem.title}</span>
                    </a>
                </li>
            ))} */}
            </ul>
                </div>
            </div>
        </Wrapper>
    )
}
export default Detials