import Login from "../../pages/admin/login";
import Dashboard from "../../pages/admin/dashboard";
import AdminAdmins from "../../pages/admin/admin-add";
import StretchCeilings from "../../pages/admin/stretch_ceilings";
import Cookies from "universal-cookie"

const cookies = new Cookies();
export const  AdminRouter = [
    {
        id : 1, 
        path : "/admin",
        Element : <Login/>
    },
    {
        id : 2, 
        path : cookies.get("access") ?  "/admin/dashboard" : null,
        Element : <Dashboard/>
    },
    {
        id : 3, 
        path : cookies.get("access") ? "/admin/stretch" : null,
        Element : <StretchCeilings/>
    },
    {
        id : 4, 
        path : cookies.get("access") ? "/admin/adminadd" : null,
        Element : <AdminAdmins/>
    }
]
