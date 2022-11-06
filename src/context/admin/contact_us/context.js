import { useState , useEffect } from "react";
import { createContext } from "react";

export const ContactContext = createContext({
    ContactMap:[],
})

export const ContactProvider = ({children})=>{
    const [ContactMap , setContactMap] = useState([])

    useEffect(() => {
        fetch("http://62.113.105.56:5000/contact_us")
        .then(res => res.json())
        .then(result => setContactMap(result))
    }, [ContactMap])

    const value = { ContactMap};
    return(
        <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
    )
}