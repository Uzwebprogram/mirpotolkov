import React, { useContext } from "react";
import {
  CardWrapper,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Prise,
  FlagBox,
} from "./styled-index";
import flag from "../../../../assets/images/client/flag.png";
import ModalPhone from "../../Modal";
import { useTranslation } from "react-i18next";
const ChoosCard = ({ElementChoos}) => {
  function getValue(){
    return window.localStorage.getItem("i18nextLng")
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [t, i18n] = useTranslation()
  function getValue() {
    return window.localStorage.getItem("i18nextLng")
  }
  getValue()
  return (
    <>
      <CardWrapper>
      <ModalPhone open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        {ElementChoos?.cuisine.slice(0,6).map((elem) => (
          <Card>
            <CardHeader>
              <h4>{getValue() == "ru" ? elem.titlecuisineru: getValue() == "en" ? elem.titlecuisineen: getValue() == "uz" ? elem.titlecuisineuz:null}</h4>
            </CardHeader>
            <CardBody>
              <img src={`https://api.mirpotolkov.uz/static/${elem.image}`} width={360} height={202} alt="images" />
            </CardBody>
            <CardFooter>
              <button onClick={handleOpen}>
                {t("HomeChoose.1")} <i class="bx bx-right-arrow-circle"></i>
              </button>
            </CardFooter>
          </Card>
        ))}
      </CardWrapper>
    </>
  );
};

export default ChoosCard;
