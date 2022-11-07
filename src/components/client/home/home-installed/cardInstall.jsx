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
import { useState } from "react";
const CardInstall = ({visible}) => {
  const {CommentMap} = useContext(CommentContext)
  function getValue(){
    return window.localStorage.getItem("i18nextLng")
  }
  return (
    <>
      <CardWrapper>
        {CommentMap.slice(0 ,visible).map((elem) => (
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
                <p>{elem.date}</p>
                <div>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </div>
                <p>
                  Создание полотна: <br /> {elem.creating_canvas} день
                </p>
                <p>Монтаж: {elem.mounting} день</p>
                <p>
                  Объем: {elem.volume}m <sup>2</sup>
                </p>
                <p>{elem.money}сум</p>
              </CardImgContent>
            </CardBody>
            <CardFooter>
              <img  style={{borderRadius:"50%" , boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}} src={`http://62.113.105.56:5000/static/${elem.avatar_image}`}  width={78} height={78} alt="imaged" />
              <div>
                <h4>Заказчик: {elem.client_name_surname}</h4>
                <p>
                  {getValue()  == "uz" ? elem.client_comment_uz : getValue() == "en" ? elem.client_comment_ru : getValue() == "ru" ? elem.client_comment_en :null}
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
