import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999;
  right: 0;
  left: 0;
  background-color: #fff;
`;

export const NavBar = styled.div`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0 0 0 50px;
  margin: 0;

  li {
    margin: 0 20px;

    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      color: #224066;
    }
  }
`;
