import { useState , useEffect } from "react";
import { createContext } from "react";

export const ContactContext = createContext({
    ContactMap:[],
})

export const ContactProvider = ({children})=>{
    const [ContactMap , setContactMap] = useState([])

    useEffect(() => {
        fetch("https://api.mirpotolkov.uz/contact_us")
        .then(res => res.json())
        .then(result => setContactMap(result))
    }, [ContactMap])

    const value = { ContactMap};
    return(
        <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
    )
}