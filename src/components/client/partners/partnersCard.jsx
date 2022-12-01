import React from "react";
import {
  CeilCardWrapper,
  CeilCard,
  CeilItem,

  WrapperUser,
} from "./styled-index";

const PartnersCard = ({ Element }) => {
  return (
    <>
      <CeilCardWrapper>
        <CeilCard>
          {Element.partners?.map((elem, index) => (
            <CeilItem key={elem.region_id}>
              <h4>{elem.titleru}</h4>

              <img
                src={`https://api.mirpotolkov.uz/static/${elem.image}`}
                width={247}
                height={173}
                alt="images"
              />

              <WrapperUser>
                <img
                  src={`https://api.mirpotolkov.uz/static/${elem.avatar_image}`}
                  alt="avatar"
                />
                <span>{elem.partner_name}</span>
              </WrapperUser>

              <a href={`tel:${elem.phone}`}>
                {elem.phone} <i class="bx bxs-phone-call"></i>
              </a>
            </CeilItem>
          ))}
        </CeilCard>
      </CeilCardWrapper>
    </>
  );
};

export default PartnersCard;
