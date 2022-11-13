import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import { Prev } from "../../../components/client/our-worker/home-choose/styled-index"
import { WrapperContainer} from "../../../style-App"
import { Wrapper ,WrapperTop } from "./styled-index"
import PartnerCard from "./../../../components/client/partners/index"
function Partners() {
    const {t , i18n} = useTranslation(); 
    return(
        <WrapperContainer>
            <WrapperTop>
            <Prev>
            <button>
              <NavLink to="/">
                <i class="bx bx-left-arrow-circle"></i> {t("HomeChoose.4")}
              </NavLink>
            </button>
          </Prev>
            <h2>Ташкент</h2>
            </WrapperTop>
            <PartnerCard/>
        </WrapperContainer>
    )
}
export default Partners