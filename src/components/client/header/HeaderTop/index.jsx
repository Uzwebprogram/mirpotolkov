import React from "react";
import { WrapperContainer } from "../../../../style-App";
import { NavList, Section } from "./styled-index";
import { NavLink } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <Section>
        <WrapperContainer>
            <NavList>
                <li>
                  <NavLink>Lorem</NavLink>
                </li>
                <li>
                  <NavLink>Lorem</NavLink>
                </li>
                <li>
                  <NavLink>Lorem</NavLink>
                </li>
                <li>
                  <NavLink>Lorem</NavLink>
                </li>
                <li>
                  <NavLink>Lorem</NavLink>
                </li>
                <li>
                  <NavLink>Lorem</NavLink>
                </li>
                <li>
                  <NavLink>Lorem1</NavLink>
                </li>
            </NavList>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HeaderTop;
