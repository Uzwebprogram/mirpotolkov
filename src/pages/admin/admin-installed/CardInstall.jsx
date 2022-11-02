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

import CommentModal from "../../../components/admin/admin-comment/modal-form";
 

import chooseImg from "../../../assets/images/client/chooseImg.jpg";
import avatar from "../../../assets/images/client/logo1.png";
// import { ChooseContext } from "../../../context/client/choose/context";
import { CommentContext } from "../../../context/client/comment/context";
const card = [1, 2, 3, 4];
const CardInstall = () => {

  const {CommentMap} = useContext(CommentContext)
  // console.log(CommentMap);
  return (
    <>
    <CommentModal/>
      <CardWrapper>
        {CommentMap.map((elem) => (
          <Card>
            <CardHeader>
              <h4>{elem.titleru}</h4>
            </CardHeader>
            <CardBody>
              <CardImg>
                <img src={`https://mebel-b.herokuapp.com/static/${elem.image}`} alt="image" width={352} height={197} />
                <MiniImg>
                  <img src={`https://mebel-b.herokuapp.com/static/${elem.image}`} alt="image" width={63} height={35} />
                  <img src={`https://mebel-b.herokuapp.com/static/${elem.image}`} alt="image" width={63} height={35} />
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
                  Создание полотна: <br /> {elem.creating_canvas}
                </p>
                <p>Монтаж: {elem.mounting}</p>
                <p>
                  Объем: {elem.volume} <sup>2</sup>
                </p>
                <p>3 432р</p>
              </CardImgContent>
            </CardBody>
            <CardFooter>
              <img src={elem.avatar_image} width={78} height={78} alt="image" />
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
