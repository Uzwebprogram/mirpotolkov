import { useState , useEffect } from "react";
import { createContext } from "react";

export const RegionContext = createContext({
    RegionMap:[],
})

export const RegionProvider = ({children})=>{
    const [RegionMap , setRegionMap] = useState([])
    useEffect(() => {
        fetch("https://api.mirpotolkov.uz/region")
        .then(res => res.json())
        .then(result => setRegionMap(result))
    }, [RegionMap])
    const value = {RegionMap};
    return(
        <RegionContext.Provider value={value}>{children}</RegionContext.Provider>
    )
}