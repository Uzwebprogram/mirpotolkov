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

import CuinsinesDeletPutComponent from "../../../components/admin/cuisines/team-delet-put";

import flag from "../../../assets/images/client/flag.png";

const AdminChoosCard = ({ Element }) => {
  return (
    <>

      <CardWrapper>
        {Element.cuisine?.map((elem) => (
          <Card>
            <CardHeader>
              <h4>{elem.titlecuisineru}</h4>
            </CardHeader>
            <CardBody>
              <img
                src={`https://api.mirpotolkov.uz/static/${elem.image}`}
                width={360}
                height={202}
                alt="imagef"
              />
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
