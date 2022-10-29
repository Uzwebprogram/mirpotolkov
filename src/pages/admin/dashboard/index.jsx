import { Wrapper } from "./styled-index"
import CardBox from "../../../components/admin/dashboard/cardBox/index"
import Detials from "../../../components/admin/dashboard/detials"
function Dashboard() {
    return(
        <Wrapper>
                <CardBox/>
                <Detials/>
        </Wrapper>
    )
}
export default Dashboard