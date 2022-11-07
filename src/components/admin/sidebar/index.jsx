import {
  Wrapper,
  WrapperTop,
  WrapperList,
  WrapperItem,
  Profile,
  ProfileTitle,
} from "./styled-index";
import Close from "./../../../assets/images/admin/Close.svg";
import Logo from "./../../../assets/images/client/logomir.png"
import { useRef, useState } from "react";
import { dataSidebar } from "./data-sidebar";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const SidebarContainer = useRef();
  const ImageLogo = useRef();
  const ImageClose = useRef();
  const [hamburger, setHamburger] = useState("false");
  return hamburger == "false" ? (
    <Wrapper ref={SidebarContainer}>
      <WrapperTop>
        {hamburger === "false" ? (
          <img
            ref={ImageLogo}
            style={{ transition: "0.5s" }}
            src={Logo}
            width={140}
            alt="logo images"
          />
        ) : (
          <img
            ref={ImageLogo}
            style={{ transition: "0.5s"}}
            src={Logo}
            width={0}
            alt="logo images"
          />
        )}
        {hamburger === "false" ? (
          <img
            style={{
              transition: "0.5s",
              cursor: "pointer",
              marginLeft: "15px",
            }}
            ref={ImageClose}
            onClick={() => setHamburger("true")}
            src={Close}
            width={32}
            height={32}
            alt="images close"
          />
        ) : (
          <img
            style={{
              transition: "0.5s",
              cursor: "pointer",
              transform: "rotate(180deg",
            }}
            ref={ImageClose}
            onClick={() => setHamburger("true")}
            src={Close}
            width={32}
            height={32}
            alt="images close"
          />
        )}
      </WrapperTop>
      <WrapperList>
        {dataSidebar.map((elem, index) => (
          <WrapperItem key={index}>
            <NavLink
              to={elem.path}
              style={{
                textDecoration: "none",
                display: "flex",
                padding: "15px",
                width: "100%",
              }}
            >
              <box-icon name={elem.icon}></box-icon>
              <span>{elem.title}</span>
            </NavLink>
          </WrapperItem>
        ))}
      </WrapperList>
    </Wrapper>
  ) : (
    <Wrapper ref={SidebarContainer} style={{ width: "3%" }}>
      <WrapperTop>
        {hamburger === "false" ? (
          <img
            ref={ImageLogo}
            style={{ transition: "0.5s" ,  }}
            src={Logo}
            width={140}
            alt="logo images"
          />
        ) : (
          <img
            ref={ImageLogo}
            style={{ transition: "0.5s", marginRight:"10px"  }}
            src={Logo}
            width={0}
            alt="logo images"
          />
        )}
        {hamburger === "false" ? (
          <img
            style={{ transition: "0.5s", cursor: "pointer" }}
            ref={ImageClose}
            onClick={() => setHamburger("true")}
            src={Close}
            width={32}
            height={32}
            alt="images close"
          />
        ) : (
          <img
            style={{
              transition: "0.5s",
              cursor: "pointer",
              transform: "rotate(180deg",
            }}
            ref={ImageClose}
            onClick={() => setHamburger("false")}
            src={Close}
            width={32}
            height={32}
            alt="images close"
          />
        )}
      </WrapperTop>
      <WrapperList>
        {dataSidebar.map((elem, index) => (
          <WrapperItem key={index}>
            <NavLink
              to={elem.path}
              style={{
                textDecoration: "none",
                display: "flex",
                padding: "15px",
                width: "100%",
              }}
            >
              <box-icon name={elem.icon}></box-icon>
              <span style={{ fontSize: "0px" }}>{elem.title}</span>
            </NavLink>
          </WrapperItem>
        ))}
      </WrapperList>
    </Wrapper>
  );
}
export default Sidebar;
