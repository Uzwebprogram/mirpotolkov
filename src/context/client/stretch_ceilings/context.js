import { useState , useEffect } from "react";
import { createContext } from "react";

export const StretchContext = createContext({
    StretchMap:[],
})

export const StretchProvider = ({children})=>{
    const [StretchMap , setStretchMap] = useState([])

    useEffect(() => {
        fetch("https://mebel-b.herokuapp.com/stretch_ceilings")
        .then(res => res.json())
        .then(result => setStretchMap(result))
    }, [StretchMap])

    const value = { StretchMap};
    return(
        <StretchContext.Provider value={value}>{children}</StretchContext.Provider>
    )
}