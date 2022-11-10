import { useTranslation } from "react-i18next";
import { Wrapper, WrapperFixed } from "./styled-index";

function Networks() {
    const {t, i18n} = useTranslation();
  return (
    <WrapperFixed>
      <Wrapper>
        <a href="https://t.me/Mirpotolkov_uzbot" target="_blank">
            {t("Fixed.0")}
        </a>
      </Wrapper>
    </WrapperFixed>
  );
}
export default Networks;
