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

import ChooseModal from "../../../components/admin/ceilling-option/modal-form/index";
import CategoryModal from "../../../components/admin/ceilling-option/modal-form-category/index";
import CuinsinesDeletPutComponent from "../../../components/admin/cuisines/team-delet-put";

import flag from "../../../assets/images/client/flag.png";

import { ChooseContext } from "../../../context/client/choose/context";
const AdminChoosCard = ({ Element }) => {
  const { ChooseMap } = useContext(ChooseContext);
  function getValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  // console.log(Element);

  return (
    <>
      <div style={{display: 'flex', position: 'absolute', top: '10px', right: '10px'}}>
        <ChooseModal />
        <CategoryModal />
      </div>
      <CardWrapper>
        {Element.cuisine?.map((elem) => (
          <Card>
            <CardHeader>
              <h4>{elem.titlecuisineru}</h4>
            </CardHeader>
            <CardBody>
              <img
                src={`http://62.113.105.56:5000/static/${elem.image}`}
                width={360}
                height={202}
                alt="imagef"
              />
              <Prise>
                <strike>от сум</strike>
                <br />
                <span>от {elem.money} сум</span>
              </Prise>
              <FlagBox>
                <img src={flag} alt="image" />
                <p>{elem.descriptionru}</p>
              </FlagBox>
            </CardBody>
            <CardFooter>
              <CuinsinesDeletPutComponent
                Element={elem}
                DeleteId={elem.id}
                PutBlog={elem.id}
              />
            </CardFooter>
          </Card>
        ))}
      </CardWrapper>
    </>
  );
};

export default AdminChoosCard;
