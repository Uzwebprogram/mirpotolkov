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
import chooseImg from "../../../../assets/images/client/chooseImg.jpg";
import flag from "../../../../assets/images/client/flag.png";
import ModalPhone from "../../Modal";
import { ChooseContext } from "../../../../context/client/choose/context";
const ChoosCard = () => {
  const {ChooseMap} = useContext(ChooseContext)
  function getValue(){
    return window.localStorage.getItem("i18nextLng")
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CardWrapper>
      <ModalPhone open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        {ChooseMap.map((elem) => (
          <Card>
            <CardHeader>
              <h4>{getValue() == "ru" ? elem.titleCuisineRu: getValue() == "en" ? elem.titleCuisineEn: getValue() == "uz" ? elem.titleCuisineUz:null}</h4>
            </CardHeader>
            <CardBody>
              <img src={elem.image} width={360} height={202} alt="image" />
              <Prise>
                <strike>от сум</strike>
                <br />
                <span>от {elem.money} сум</span>
              </Prise>
              <FlagBox>
                <img src={flag} alt="image" />
                <p>{getValue() == "ru" ? elem.descriptionRu: getValue() == "en" ? elem.descriptionEn: getValue() == "uz" ? elem.descriptionUz:null}</p>
              </FlagBox>
            </CardBody>
            <CardFooter>
              <button onClick={handleOpen}>
                Заказать <i class="bx bx-right-arrow-circle"></i>
              </button>
            </CardFooter>
          </Card>
        ))}
      </CardWrapper>
    </>
  );
};

export default ChoosCard;
