import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ToDoForm = ({ addTask }) => {
  const [ userInput, setUserInput ] = useState('');

  const handleChange  = (e) =>{
    setUserInput(e.currentTarget.value);
  }

  const handleSubmit = (e) =>{
    // html form submit을 막음
    e.preventDefault();
    addTask(userInput);

    // add 후에 input 초기화
    setUserInput("");
  }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Row className="align-items-center">
          <Col xs="m-auto auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              task
            </Form.Label>
            <Form.Control
              value={userInput}
              onChange={handleChange} 
              className="m-auto mb-2 w-p100"
              id="inlineFormInput"
              placeholder="Enter task"
            />
          </Col>
          
          <Col xs="auto">
            <Button type="submit"  className="mb-2">
              Add
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
};

export default ToDoForm;