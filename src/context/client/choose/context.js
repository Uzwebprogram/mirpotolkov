import { useState , useEffect } from "react";
import { createContext } from "react";

export const ChooseContext = createContext({
    ChooseMap:[],
})

export const ChooseProvider = ({children})=>{
    const [ChooseMap , setChooseMap] = useState([])

    useEffect(() => {
        fetch("http://62.113.105.56:5000/ceiling_option")
        .then(res => res.json())
        .then(result => setChooseMap(result))
    }, [ChooseMap])

    const value = { ChooseMap};
    return(
        <ChooseContext.Provider value={value}>{children}</ChooseContext.Provider>
    )
}