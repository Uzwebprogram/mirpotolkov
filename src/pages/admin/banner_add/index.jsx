import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import BannerPut from "../../../components/admin/banner-put";
import { Wrapper } from "./styled-index";

function Banner() {
    const [banner , setBanner] = useState([]);

    useEffect(() => {
      fetch("https://mebel-b.herokuapp.com/banners")
      .then(res => res.json())
      .then(result => setBanner(result))
    }, [banner])
    


    return(
        <Wrapper>
            {banner.map((elem, index)=>
                    <>
            <img key={index} width={1000} height={500} src={`https://mebel-b.herokuapp.com/static/${elem.banner_image}`} alt="banner" />
            <BannerPut  PutBlog={elem.banner_id} />
                    </>
                            )} 
        </Wrapper>
    )
}
export default Banner