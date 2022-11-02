import HeaderTop from "./HeaderTop";
import { useState } from "react"
import { useTranslation } from "react-i18next";
import HamburgerMenu from './hamburger-menu/index'


const Header = () => {
  const [t, i18n] = useTranslation();
  const [HamburgerClick , setHamburgerClick] = useState(false)
  const HandleClick = () =>{
      setHamburgerClick(true)
    }
    const HandleClickClose = () =>{
      setHamburgerClick(false)
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

  return (
    <>
      <HeaderTop HandleClick={HandleClick} />

      {HamburgerClick === false ? (
        <div className="overlay"></div>
      ) : HamburgerClick === true ? (
        <div
          className="overlay"
          style={{ display: "block" }}
          onClick={HandleClickClose}
        ></div>
      ) : null}

       <HamburgerMenu HamburgerClick={HamburgerClick} HandleClickClose={HandleClickClose}/>
    </>
  );
};

export default Header;
