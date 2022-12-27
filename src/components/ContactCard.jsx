import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="d-flex container-item contact-item-header ">
      <div className="d-flex">
        <img className="round" src={user} alt="" />
        <div className="title-area ml-1">
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <i className="fa fa-trash" onClick={() => props.clickHandler(id)}></i>
    </div>
  );
};

export default ContactCard;
