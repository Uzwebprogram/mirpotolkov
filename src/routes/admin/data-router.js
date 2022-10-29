import Login from "../../pages/admin/login";
import Dashboard from "../../pages/admin/dashboard";

export const  AdminRouter = [
    {
        id : 1, 
        path : "/admin",
        Element : <Login/>
    },
    {
        id : 1, 
        path : "/admin/dashboard",
        Element : <Dashboard/>
    }
]
