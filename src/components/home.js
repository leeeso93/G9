import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css';

const Home = () => {

  return (
    <Fragment>

      <Container fluid="md" className='container-center'>
        <Row>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Todo</Card.Header>
              <Card.Body>
                <Card.Title>React To do App</Card.Title>
                  <NavLink to="/todo">
                    <Button variant="primary">
                      Go somewhere
                    </Button>
                  </NavLink>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header as="h5">주민번호</Card.Header>
              <Card.Body>
                <Card.Title> 주민 번호를 체크해드립니다.</Card.Title>
                <NavLink to="/rrn">
                  <Button variant="primary">
                    Go somewhere
                  </Button>
                </NavLink>
              </Card.Body>
            </Card>

          </Col>
          <Col>

            <Card>
              <Card.Header as="h5">Naver</Card.Header>
              <Card.Body>
                <Card.Title>네이버 실시간 검색어</Card.Title>
                <NavLink to="/naver">
                  <Button variant="primary">
                    Go somewhere
                  </Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
};

export default Home;
