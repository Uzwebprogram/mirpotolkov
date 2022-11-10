import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {Wrapper} from "./styled-index"

function HamburgerMenu({HamburgerClick , HandleClickClose}) {
    const { t, i18n } = useTranslation();
    const handleLang = (e) =>{
        const lang = e.target.value
        i18n.changeLanguage(lang)
        window.location.reload() 
      }
      function LanguValue() {
        return window.localStorage.getItem("i18nextLng")
      }
      const data = [
          {
              id : 2, 
              title : "Header.1",
              link : "#calculator",
  
          },
          {
              id : 3, 
              title : "Header.2",
              link : "#Advantage",
  
          },
          {
              id : 4, 
              title : "Header.3",
              link : "#choose",
  
          },
          {
              id : 5, 
              title : "Header.4",
              link : "#HomeInstalled",
  
          },
            {
              id : 5, 
              title : "Header.5",
              link : "#HomeSxema",
          }, 
          {
            id : 6, 
            title : "Header.6",
            link : "#contact",
          }, 
      ]
    return(
        <>
        {HamburgerClick === true ? (<Wrapper style={{left : "0px"}}>
            <span onClick={HandleClickClose}>&times;</span>
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
          <ul>
                    {data.map(elem =>(
                        <>
                    <li key={elem.id}>
                    <a onClick={HandleClickClose} href={elem.link}>{t(elem.title)}</a>
                    </li> 
                    <hr />
                    </>
                    ))}
                </ul>
          <a href="tel:+998977501133">+99897  750-11-33</a>

        </Wrapper>):HamburgerClick === false ? (  
                  <Wrapper style={{left : "-650px"}}>
            <span onClick={HandleClickClose}>&times;</span>
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
            ):null}
          </select>
          <ul>
                    {data.map(elem =>(
                        <>
                 <li key={elem.id}>
                    <NavLink to={elem.link}>{t(elem.title)}</NavLink>
                    </li> 
                    <hr />
                    </>
                    ))}
                </ul>
          <a href="tel:+998977501133">+99897  750-11-33</a>
        </Wrapper>):null} 
        </>
    )
}
export default HamburgerMenu