import Home from "../../pages/client/home";
import OurWorks from "../../pages/client/our_works";

export const ClientRouter = [
    {
        id : 1, 
        path : "/",
        Element : <Home/>
    },
    {
        id : 1, 
        path : "/ourworks",
        Element : <OurWorks/>
    }
]