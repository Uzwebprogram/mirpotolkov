import { useContext } from "react"
import { CeilCard, CeilCardWrapper, CeilItem, WrapperUser } from "../../../components/client/partners/styled-index"
import { StretchContext } from "../../../context/client/stretch_ceilings/context"
import { WrapperContainer } from "../../../style-App"
import { Wrapper } from "./styled-index"


function PartnersAdmin() {
    const {StretchMap} = useContext(StretchContext)
    return(
        <>
    <Wrapper>
        <WrapperContainer>
          <CeilCardWrapper>
            <CeilCard>
              {StretchMap.map((elem , index) => (
                <CeilItem key={index}>
                  <h4>3Д Потолок</h4>
                  
                  <img src={`https://api.mirpotolkov.uz/static/${elem.image}`} width={247} height={173} alt="images" />
                  
                  <WrapperUser>
                    <img src={"https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1"} alt="" />
                    <span>Алиса Иванова</span>
                  </WrapperUser>

                  <a href="tel:+998915039390" >
                    +99891-503-93-90 <i class='bx bxs-phone-call'></i>
                  </a>
                </CeilItem>
              ))}
            </CeilCard>
          </CeilCardWrapper>
        </WrapperContainer>
      </Wrapper>
        </>
    )
}
export default PartnersAdmin