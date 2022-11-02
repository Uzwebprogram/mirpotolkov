import React from "react";
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
const card = [1, 2, 3];
const ChoosCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CardWrapper>
      <ModalPhone open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        {card.map(() => (
          <Card>
            <CardHeader>
              <h4>Матовый потолок на кухню до 10 м2</h4>
            </CardHeader>
            <CardBody>
              <img src={chooseImg} alt="image" />
              <Prise>
                <strike>от руб</strike>
                <br />
                <span>от 2800 р</span>
              </Prise>
              <FlagBox>
                <img src={flag} alt="image" />
                <p>
                  Установка «под ключ» - работа + материал. Рассрочка 0% без
                  банка.
                </p>
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
