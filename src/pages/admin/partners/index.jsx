import { useContext } from "react"
import PartnersModal from "../../../components/admin/ceilling-option-partners/modal-form"
import CategoryRegionModal from "../../../components/admin/ceilling-option-partners/modal-form-category"
import OptionRegionDeletPutComponent from "../../../components/admin/ceilling-option-partners/option-delet-put"
import PartnersDeletPutComponent from "../../../components/admin/partners/team-delet-put"
import { CeilCard, CeilCardWrapper, CeilItem, WrapperUser } from "../../../components/client/partners/styled-index"
import { RegionContext } from "../../../context/client/region/context"
import { WrapperContainer } from "../../../style-App"
import { Wrapper } from "./styled-index"


function PartnersAdmin() {
    const {RegionMap} = useContext(RegionContext)
    console.log(RegionMap);
    return(
        <>
    <Wrapper>
    <div style={{display: 'flex', position: 'absolute', top: '10px', right: '10px'}}>
        <PartnersModal />
        <CategoryRegionModal />
      </div>
      <OptionRegionDeletPutComponent/>
        <WrapperContainer>
          <CeilCardWrapper>
            <CeilCard>
              {RegionMap.partners.map((elem , index) => (
                <CeilItem key={index}>
                  <h4>{elem.titleuz}</h4>
                  
                  <img src={`https://api.mirpotolkov.uz/static/${elem.image}`} width={247} height={173} alt="images" />
                  
                  <WrapperUser>
                    <img src={"https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1"} alt="" />
                    <span>{elem.partner_name}</span>
                  </WrapperUser>

                  <a href="tel:+998915039390" >
                    {elem.phone}<i class='bx bxs-phone-call'></i>
                  </a>
                  <PartnersDeletPutComponent
                Element={elem}
                DeleteId={elem.id}
                PutBlog={elem.id}
              />
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