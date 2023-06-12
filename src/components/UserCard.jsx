import React from "react";
import { Card, CardImg } from "react-bootstrap";
import emailIcon from "../assets/images/email.svg";
import phoneNumber from "../assets/images/phone.svg";
import lacotionInfo from "../assets/images/location.svg";

const UserCard = ({ picture, name, email, phone, location, registered }) => {
  return (
    <Card className="bg-warning border-primary" style={{ boxShadow:"3px 5px 15px black", width:"500px", maxWidth:"550px" }}>
      <div className="d-flex align-items-center">
        <CardImg
          src={picture.large}
          className="ms-5 my-3"
          style={{ width: "100px", borderRadius: "50%" }}
        />
        <Card.Title className="ms-4">
          {name.title} {name.first} {name.last}
        </Card.Title>
      </div>

      <Card.Body>
        <div className="ms-5 ps-3 d-flex">
          <img src={emailIcon} alt="Email Icon" width={30} />
          <span className="ps-5">{email}</span>
        </div>
        <div className="ms-5 my-4 ps-3 d-flex">
          <img src={phoneNumber} alt="phone Icon" width={30} />
          <span className="ps-5">{phone}</span>
        </div>
        <div className="ms-5 ps-3 d-flex">
          <img src={lacotionInfo} alt="location Icon" width={30} />
          <span className="ps-5">
            {location.city} - {location.country}
          </span>
        </div>
      </Card.Body>

      <Card.Footer style={{ backgroundColor:"orange" }}>
        <p>Age: {registered.age}</p>
        <p>Register Date: {registered.date.slice(0, 10)}</p>
      </Card.Footer>
    </Card>
  );
};

export default UserCard;
