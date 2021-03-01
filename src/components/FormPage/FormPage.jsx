import React from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FormPage.css';


const FormPage = () => {
    return (
        <div className="form-section">
            <Container>
        
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>


                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Yacht Categories</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Premium Class</option>
                                <option>Sport Class</option>
                                <option>Econom Yacht</option>


                            </Form.Control>
                        </Form.Group>
                      
                    </Form.Row>


                    <Link to="/credit"><Button variant="primary" type="text">
                        Submit
  </Button>
  </Link>
                </Form>
            </Container>
        </div>
    );
};
export default FormPage;