import { ChooseTop } from "../home-choose/styled-index"
import { Wrapper , WrapperContainer } from "./styled-index";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function Banners() {
        const [banner, setBanner] = useState([]);
        const { t , i18n } = useTranslation();
        useEffect(() => {
          fetch("https://api.mirpotolkov.uz/banners")
            .then((res) => res.json())
            .then((result) => setBanner(result));
        }, [banner]);
      
    return(
        <WrapperContainer>
                <Wrapper>
                <h2>{t("Fixed.1")}</h2>
                {banner.map((elem, index) => (
                    <img
                        key={index}
                        src={`https://api.mirpotolkov.uz/static/${elem.banner_image}`}
                        alt="banner"
                    />
                ))} 
                </Wrapper>
        </WrapperContainer>
    )
}
export default Banners