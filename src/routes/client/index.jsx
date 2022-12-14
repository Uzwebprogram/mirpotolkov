import { ClientRouter } from "./data-router"
import {Routes ,Route} from "react-router-dom"
import Header from "../../components/client/header"
import Footer from "../../components/client/footer"
import FixedNetwork from "../../components/client/fixed"
function ClientRouterComponent() {
    return(
        <>
        <FixedNetwork/>
        <Header/>
            <Routes>
                {ClientRouter.map((elem , index) =>
                    <Route key={index} path={elem.path}  element={elem.Element} />
                )}
            </Routes>
        <Footer/>
        </>
    )
}
export default ClientRouterComponent