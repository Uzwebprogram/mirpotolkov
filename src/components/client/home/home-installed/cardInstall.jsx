import React from "react";
import {
  CardWrapper,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImgContent,
  CardImg,
} from "./styled-index";

import chooseImg from "../../../../assets/images/client/chooseImg.jpg";
import avatar from "../../../../assets/images/client/logo1.png";
const card = [1, 2, 3, 4];
const cardInstall = () => {
  return (
    <>
      <CardWrapper>
        {card.map(() => (
          <Card>
            <CardHeader>
              <h4>Глянцевый потолок на кухню</h4>
            </CardHeader>
            <CardBody>
              <CardImg>
                <img src={chooseImg} alt="image" width={352} height={197} />
                <div>
                  <img src={chooseImg} alt="image" width={63} height={35} />
                  <img src={chooseImg} alt="image" width={63} height={35} />
                </div>
              </CardImg>
              <CardImgContent>
                <p>10.05.2022</p>
                <div>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </div>
                <p>
                  Создание полотна: <br /> 1 день
                </p>
                <p>Монтаж: 1 день</p>
                <p>
                  Объем: 10м <sup>2</sup>
                </p>
                <p>3 432р</p>
              </CardImgContent>
            </CardBody>
            <CardFooter>
              <img src={avatar} width={78} height={78} alt="image" />
              <div>
                <h4>Заказчик: Оксана Иванова</h4>
                <p>
                  Добрый день, хотелось бы оставить благодарственный отзыв о
                  работе вашей компании. Результатом очень довольны, все было
                  сделано быстро и аккуратно, после работы убрали за собой и
                  дали рекомендации как ухаживать за потолками. Нисколько не
                  жалею, что обратилась в эту компанию
                </p>
              </div>
            </CardFooter>
            <hr />
          </Card>
        ))}
      </CardWrapper>
    </>
  );
};

export default cardInstall;
