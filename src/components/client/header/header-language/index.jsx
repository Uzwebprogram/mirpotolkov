import { useTranslation } from "react-i18next";
import {Wrapper} from './styled-index'
// import Hamburger from "./../../../assets/component/header-hamburger.svg"
import { useState } from "react";
function LanguageHeader({HandleClick}) {
  const { t, i18n } = useTranslation();
    const handleLang = (e) =>{
        const lang = e.target.value
        i18n.changeLanguage(lang)
        window.location.reload() 
      }
      function LanguValue() {
        return window.localStorage.getItem("i18nextLng")
      }

    return(
        <Wrapper>
          <select onChange={handleLang}>
            {LanguValue() === "ru" ?(
              <>
              <option value="ru">RUS</option>
              <option value="uz">UZB</option>
              <option value="en">ENG</option>
              </>
            ) 
            : LanguValue() === 'uz'?(
              <>                         
              <option value="uz">UZB</option>
               <option value="ru">RUS</option>
              <option value="en">ENG</option>
              </>
            ) 
            : LanguValue() === 'en'?(
              <>                         
              <option value="en">ENG</option>
              <option value="uz">UZB</option>
               <option value="ru">RUS</option>
              </>
            ):(
              <>                         
               <option value="ru">RUS</option>
              <option value="en">ENG</option>
              <option value="uz">UZB</option>
              </>
            )}
          </select>
          {/* <a href="tel:+998998107090">+99899 810-70-90</a> */}
          {/* <button onClick={HandleClick}><img src={Hamburger} width={36} height={24} alt="menu" /></button> */}
        </Wrapper>
    )
}
export default LanguageHeader