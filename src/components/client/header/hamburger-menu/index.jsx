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
              id : 1, 
              title : "Header.0",
              link : "/services",
  
          },
          {
              id : 2, 
              title : "Header.1",
              link : "/projects",
  
          },
          {
              id : 3, 
              title : "Header.2",
              link : "/about",
  
          },
          {
              id : 4, 
              title : "Header.3",
              link : "/team",
  
          },
          {
              id : 5, 
              title : "Header.4",
              link : "/Blog",
  
          },
            {
              id : 5, 
              title : "Header.5",
              link : "/reviews",
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
                    <NavLink onClick={HandleClickClose} to={elem.link}>{t(elem.title)}</NavLink>
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