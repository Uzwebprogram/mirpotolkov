import { WrapperContainer } from "../../../style-App";
import { Section } from "./styled-index";
import HeaderTop from "./HeaderTop";
import { useTranslation } from "react-i18next";
import HeaderBottom from "./HeaderBottom";
import { WrapperHero } from "./styled-index";

const Header = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <HeaderTop />
    </>
  );
};

export default Header;
