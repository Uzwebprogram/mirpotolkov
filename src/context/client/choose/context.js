import { useState , useEffect } from "react";
import { createContext } from "react";

export const ChooseContext = createContext({
    ChooseMap:[],
})

export const ChooseProvider = ({children})=>{
    const [ChooseMap , setChooseMap] = useState([])

    useEffect(() => {
        fetch("https://mebel-b.herokuapp.com/ceiling_option")
        .then(res => res.json())
        .then(result => setChooseMap(result))
    }, [ChooseMap])

    const value = { ChooseMap};
    return(
        <ChooseContext.Provider value={value}>{children}</ChooseContext.Provider>
    )
}