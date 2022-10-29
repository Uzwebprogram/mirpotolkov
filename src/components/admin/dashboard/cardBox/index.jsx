
import {Wrapper} from "./styled-index"

function CardBox() {
    return(
        <Wrapper>
        <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">10</div>
                        <div class="cardName">Команда</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">16</div>
                        <div class="cardName">Наши работы</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">17</div>
                        <div class="cardName">Наши клиенты</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">20</div>
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