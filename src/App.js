import { useLocation } from "react-router-dom";
import ClientRouterComponent from "./routes/client";
import AdminRouterComponent from "./routes/admin";
import { AdminRouter } from "./routes/admin/data-router";
import { GlobalStyle, Main } from "./style-App";
import Sidebar from "./components/admin/sidebar";
function App() {
  const pathname = useLocation();
  const filter = AdminRouter.filter(e => e.path === pathname.pathname)
  window.localStorage.setItem("pathname" , filter.map(elem => elem.path))
  return (
    <>
    {pathname.pathname === "/admin" ? 
           <AdminRouterComponent /> :
           <ClientRouterComponent/> && pathname.pathname === window.localStorage.getItem("pathname") ? <Main>
                    <GlobalStyle whiteColor/>
                   <Sidebar/>
                   <AdminRouterComponent/>
           </Main>:<ClientRouterComponent/>
    }
    </>
  );
}

export default App;
