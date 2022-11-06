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
const ChoosCard = ({ElementChoos}) => {
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
        {ElementChoos?.cuisine.map((elem) => (
          <Card>
            <CardHeader>
              <h4>{getValue() == "ru" ? elem.titleCuisineRu: getValue() == "en" ? elem.titleCuisineEn: getValue() == "uz" ? elem.titleCuisineUz:null}</h4>
            </CardHeader>
            <CardBody>
              <img src={`http://62.113.105.56:5000/static/${elem.image}`} width={360} height={202} alt="image" />
              <Prise>
                <strike>от сум</strike>
                <br />
                <span>от {elem.money} сум</span>
              </Prise>
              <FlagBox>
                <img src={flag} alt="image" />
                <p>{getValue() == "ru" ? elem.descriptionru: getValue() == "en" ? elem.descriptionen: getValue() == "uz" ? elem.descriptionuz:null}</p>
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
