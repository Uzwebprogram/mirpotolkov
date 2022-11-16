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
import { useTranslation } from "react-i18next";
const CardInstall = ({visible}) => {
  const {CommentMap} = useContext(CommentContext)
  function getValue(){
    return window.localStorage.getItem("i18nextLng")
  }
  const {t, i18n} = useTranslation()
  return (
    <>
      <CardWrapper>
        {CommentMap.slice(0 ,visible).map((elem) => (
          <Card>
            <CardHeader>
              {getValue()  == "uz" ? <h4>{elem.titleuz}</h4> : getValue() == "en" ? <h4>{elem.titleen}</h4> : getValue() == "ru" ? <h4>{elem.titleru}</h4> :null}
            </CardHeader>
            <CardBody>
              <CardImg>
                <img src={`https://api.mirpotolkov.uz/static/${elem.image}`} alt="imagee" width={412} height={217} />
              </CardImg>
            </CardBody>
            <CardFooter>
              <img  style={{borderRadius:"50%" , boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}} src={`https://api.mirpotolkov.uz/static/${elem.avatar_image}`}  width={78} height={73} alt="imaged" />
              <div>
                <h4>{t("HomeInstall.6")}: {elem.client_name_surname}</h4>
                <p>
                  {getValue()  == "uz" ? elem.client_comment_uz : getValue() == "en" ? elem.client_comment_en : getValue() == "ru" ? elem.client_comment_ru :null}
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
