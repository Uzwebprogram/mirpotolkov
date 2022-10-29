import { useTranslation } from "react-i18next"

const Header = () => {
  const [t , i18next] = useTranslation();
  return (
    <div>{t("Header.0")}</div>
  )
}

export default Header