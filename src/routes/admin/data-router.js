import Login from "../../pages/admin/login";
import Dashboard from "../../pages/admin/dashboard";
import AdminAdmins from "../../pages/admin/admin-add";
import StretchCeilings from "../../pages/admin/stretch_ceilings";
import Contact from "../../pages/admin/contact_us";
import Option from "../../pages/admin/option";
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
    },
    {
        id : 5, 
        path : cookies.get("access") ? "/admin/contact" : null,
        Element : <Contact/>
    },
    {
        id : 6, 
        path : cookies.get("access") ? "/admin/option" : null,
        Element : <Option/>
    },
]
