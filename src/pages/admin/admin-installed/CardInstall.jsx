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
import CommentDeletPutComponent from '../../../components/admin/admin-comment/comment-delet-put/index'

import CommentModal from "../../../components/admin/admin-comment/modal-form";
import { CommentContext } from "../../../context/client/comment/context";
const card = [1, 2, 3, 4];
const CardInstall = () => {

  const {CommentMap} = useContext(CommentContext)
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
                  Создание полотна: <br /> {elem.creating_canvas}
                </p>
                <p>Монтаж: {elem.mounting}</p>
                <p>
                  Объем: {elem.volume} <sup>2</sup>
                </p>
                <p>{elem.money}сум</p>
              </CardImgContent>
            </CardBody>
            <CardFooter>
              <img style={{borderRadius: "50%", objectFit: 'cover'}} src={`http://62.113.105.56:5000/static/${elem.avatar_image}`} width={78} height={78} alt="image" />
              <div>
                <h4>Заказчик: {elem.client_name_surname}</h4>
                <p>
                 {elem.client_comment_en}
                </p>
              </div>
             
            </CardFooter>
            <CommentDeletPutComponent  Element={elem} DeleteId={elem.id} PutBlog={elem.id}/>
            <hr />
          </Card>
        ))}
      </CardWrapper>
    </>
  );
};

export default CardInstall;
