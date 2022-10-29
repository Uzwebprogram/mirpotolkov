import { AdminRouter } from "./data-router"
import {Routes ,Route} from "react-router-dom"
function AdminRouterComponent() {
    return(
        <>
            <Routes>
                {AdminRouter.map((elem , index) =>
                    <Route key={index} path={elem.path}  element={elem.Element} />
                )}
            </Routes>
        </>
    )
}
export default AdminRouterComponent