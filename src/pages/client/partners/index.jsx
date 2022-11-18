import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Prev } from "../../../components/client/our-worker/home-choose/styled-index";
import { WrapperContainer } from "../../../style-App";
import { Wrapper, WrapperTop } from "./styled-index";
import PartnerCard from "./../../../components/client/partners/index";
import { useContext } from "react";
import { RegionContext } from "../../../context/client/region/context";
function Partners() {
  const { t, i18n } = useTranslation();
  const { RegionMap } = useContext(RegionContext);
  function GetValueLanguage() {
    return window.localStorage.getItem("i18nextLng");
  }
  return (
    <Wrapper>
      <WrapperContainer>
        <WrapperTop>
          <Prev>
            <button>
              <NavLink to="/">
                <i class="bx bx-left-arrow-circle"></i> {t("HomeChoose.4")}
              </NavLink>
            </button>
          </Prev>
          {RegionMap.map((elem) =>
            window.localStorage.getItem("MoreId") == elem.id ? (
              <h2>
                {GetValueLanguage() === "uz"
                  ? elem.region_name_uz
                  : GetValueLanguage() === "ru"
                  ? elem.region_name_ru
                  : GetValueLanguage() === "en"
                  ? elem.region_name_en
                  : null}
              </h2>
            ) : null
          )}
        </WrapperTop>
        <PartnerCard />
      </WrapperContainer>
    </Wrapper>
  );
}
export default Partners;
