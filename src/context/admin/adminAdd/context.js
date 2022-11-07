import { useState , useEffect } from "react";
import { createContext } from "react";

export const AdminContext = createContext({
    AdminMap:[],
})

export const AdminProviderAdmin = ({children})=>{
    const [AdminMap , setAdminMap] = useState([])

    useEffect(() => {
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:oMrL5JvU/user")
        .then(res => res.json())
        .then(result => setAdminMap(result))
    }, [])

    const value = { AdminMap};
    return(
        <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
    )
}