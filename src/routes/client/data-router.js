import Home from "../../pages/client/home";
import OurWorks from "../../pages/client/our_works";
import Partners from "../../pages/client/partners";
export const ClientRouter = [
    {
        id : 1, 
        path : "/",
        Element : <Home/>
    },
    {
        id : 2, 
        path : "/ourworks",
        Element : <OurWorks/>
    },
    {
        id : 3, 
        path : "/partners",
        Element : <Partners/>
    }
]