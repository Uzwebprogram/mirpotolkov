import React from "react";
import {
  CeilCardWrapper,
  CeilCard,
  CeilItem,
  Discount,
  DiscountItem,
  Line,
  LeftBlock,
  WrapperUser,
} from "./styled-index";
import PartnersDeletPutComponent from "../../../components/admin/partners/team-delet-put";

const AdminPartnersCard = ({ Element }) => {
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

              <a href="tel:+998915039390">
                {elem.phone} <i class="bx bxs-phone-call"></i>
              </a>
              <div>
                <PartnersDeletPutComponent
                  Element={elem}
                  DeleteId={elem.id}
                  PutBlog={elem.id}
                />
              </div>
            </CeilItem>
          ))}
        </CeilCard>
      </CeilCardWrapper>
    </>
  );
};

export default AdminPartnersCard;
