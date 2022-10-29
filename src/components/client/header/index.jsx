
import { WrapperContainer } from "../../../style-App"
import { Section } from "./HeaderTop/styled-index"
import HeaderTop from "./HeaderTop"

import { useTranslation } from "react-i18next"

const Header = () => {
  const [t , i18next] = useTranslation();
  return (

    <>
      <Section>
        <WrapperContainer>
          <HeaderTop/>
        </WrapperContainer>
      </Section>
    </>

    <div>{t("Header.0")}</div>

  )
}

export default Header