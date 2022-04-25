import React from "react"
import { Form, FloatingLabel, Row, Col, Button } from "react-bootstrap"

const ContactForm = () => {
  return (
    <div className="contact-form py-5">
      <div className="container">
        <Form
          method="POST"
          action="https://getform.io/f/3ec45fa5-ab07-4ff7-ba82-9ef8fcea552f"
          autoComplete="off"
        >
          <h2 className="section-title">Contact me</h2>
          <div className="bottom-line"></div>
          <p className="lead text-center">Drop me a message</p>
          <Row className="align-items-center">
            <Col sm={12} className="my-1">
              <Form.Label htmlFor="name" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control id="name" placeholder="Name" name="name" required />
            </Col>
            <Col sm={12} className="my-1">
              <Form.Label htmlFor="email" visuallyHidden>
                Email
              </Form.Label>
              <Form.Control
                id="email"
                type="email"
                placeholder="Email Address"
                name="email"
                required
              />
            </Col>
            <Col sm={12} className="my-1">
              <Form.Label htmlFor="subject" visuallyHidden>
                Subject
              </Form.Label>
              <Form.Control id="subject" placeholder="Subject" name="subject" />
            </Col>
            <Col sm={12} className="my-1">
              <FloatingLabel controlId="message" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "200px" }}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs="auto" className="my-1">
              <Button className="m-2" variant="outline-secondary" type="submit">
                Submit
              </Button>
              <Button className="m-2" variant="outline-danger" type="reset">
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default ContactForm
