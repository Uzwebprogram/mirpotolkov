
import { useContext } from "react"
import { ContactContext } from "../../../../context/admin/contact_us/context"
import { ChooseContext } from "../../../../context/client/choose/context"
import { CommentContext } from "../../../../context/client/comment/context"
import { StretchContext } from "../../../../context/client/stretch_ceilings/context"
import {Wrapper} from "./styled-index"

function CardBox() {
    const {ChooseMap} = useContext(ChooseContext)
    const {CommentMap} = useContext(CommentContext)
    const {StretchMap} = useContext(StretchContext)
    const {ContactMap} = useContext(ContactContext)
    return(
        <Wrapper>
        <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">{ChooseMap.length}</div>
                        <div class="cardName">Команда</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">{CommentMap.length}</div>
                        <div class="cardName">Наши работы</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">{StretchMap.length}</div>
                        <div class="cardName">Наши клиенты</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">{ContactMap.length}</div>
                        <div class="cardName">Связаться с нами</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default CardBox