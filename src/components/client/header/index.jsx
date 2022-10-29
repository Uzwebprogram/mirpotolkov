import { WrapperContainer } from "../../../style-App"
import { Section } from "./HeaderTop/styled-index"
import HeaderTop from "./HeaderTop"
const Header = () => {
  return (
    <>
      <Section>
        <WrapperContainer>
          <HeaderTop/>
        </WrapperContainer>
      </Section>
    </>
  )
}

export default Header