import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import UserCard from './UserCard';


const CardContainer = () => {

  const [bilgiler, setBilgiler] = useState([]);
  const url = "https://randomuser.me/api/";

  //!GET (Read) *****
  const getBilgiler = async () => {
    const veri = await axios.get(url);
    setBilgiler(veri.data.results);
  };

  useEffect(() => {
    getBilgiler();
  }, []);
  console.log(bilgiler);

  const getRandomUser = () => {
    getBilgiler();
  };

  return (
    <Container className="mt-5 d-flex flex-column justify-content-center align-items-center mx-auto">
      <Row>
        {bilgiler.map((user, index) => {
          return (
            <Col key={index}>
              <UserCard {...user} />
            </Col>
          );
        })}
      </Row>
      <Button className="mt-3 mx-auto" onClick={getRandomUser}>
        Random User
      </Button>
    </Container>
  );
}

export default CardContainer;
