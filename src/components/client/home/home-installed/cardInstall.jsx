import React, { useContext } from "react";
import {
  CardWrapper,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImgContent,
  CardImg,
  MiniImg
} from "./styled-index";

import { CommentContext } from "../../../../context/client/comment/context";
const CardInstall = () => {
  const {CommentMap} = useContext(CommentContext)
  return (
    <>
      <CardWrapper>
        {CommentMap.map((elem) => (
          <Card>
            <CardHeader>
              <h4>{elem.titleru}</h4>
            </CardHeader>
            <CardBody>
              <CardImg>
                <img src={`http://62.113.105.56:5000/static/${elem.image}`} alt="imagee" width={352} height={197} />
                <MiniImg>
                  <img src={`http://62.113.105.56:5000/static/${elem.image}`} alt="imagee" width={63} height={35} />
                  <img src={`http://62.113.105.56:5000/static/${elem.image}`} alt="imagee" width={63} height={35} />
                </MiniImg>
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
              <img  style={{borderRadius:"50%" , boxShadow:"0px 0px 5px 5px gray"}} src={`http://62.113.105.56:5000/static/${elem.avatar_image}`}  width={78} height={78} alt="image" />
              <div>
                <h4>Заказчик: {elem.client_name_surname}</h4>
                <p>
                 {elem.client_comment_ru}
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

export default CardInstall;
