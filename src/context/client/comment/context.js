import { useState , useEffect } from "react";
import { createContext } from "react";

export const CommentContext = createContext({
    CommentMap:[],
    
})

export const CommentProvider = ({children})=>{
    const [CommentMap , setCommentMap] = useState([])

    useEffect(() => {
        fetch("http://62.113.105.56:5000/client_comment")
        .then(res => res.json())
        .then(result => setCommentMap(result))
    }, [CommentMap])

    const value = { CommentMap};
    return(
        <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
    )
}