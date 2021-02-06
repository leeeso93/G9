import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'
const RRN = () => {

  const ssnCheck = (e) =>{
    // https://eyecandyzero.tistory.com/240
    e.preventDefault();
  }

  return (
    <div>
      <Container fluid="md" className='container-center'>
      <h1>주민번호 검증</h1>
        <Alert variant="success">
          올바른 주민번호입니다.
        </Alert>

        <Alert variant="danger">
          잘못된 주민번호입니다.
        </Alert>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="주민 번호 앞 6자리" maxLength={6} onChange="rowChange()"/>
            </Col>
            <Col>
              <Form.Control  placeholder="주민 번호 뒤 7자리"  maxLength={7} />
            </Col>
          </Row>
          <Row>
            <Col>
            <Button className="mt-3 w-100">검증</Button>
            </Col>
            </Row>
        </Form>
      </Container>
    </div>
  );
};

export default RRN;
