import React, { useRef } from "react";
import { useState } from "react";
import LineDivider from "./lineDivider";
import { Form, Button, Container } from "react-bootstrap";

const ContactPage = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const contactRef = useRef(null);

  const showForm = async () => {
    await setDisplayForm(true);
    contactRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div id="contact" className="text-light container">
      <h2>Contact</h2>
      <LineDivider />
      {displayForm ? (
        <Container className="d-flex align-items-center justify-content-center">
          <div style={{ width: "100%", maxWidth: "600px" }} ref={contactRef}>
            <button
              className="btn btn-outline-light"
              onClick={() => setDisplayForm(false)}>
              Hide Input Fields
            </button>
            <Form
              id="contact-form"
              action="https://formsubmit.co/25d21907621fa47dcad14068f54c78d2"
              method="POST">
              <Form.Group className="mb-3">
                <Form.Label>
                  Name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="name"
                  required
                  placeholder="eg. John Bloggs"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-left">
                  Email <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  required
                  name="email"
                  type="email"
                  placeholder="eg. email@domain.com"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Message <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  required
                  name="message"
                  as="textarea"
                  rows={3}></Form.Control>
              </Form.Group>
              <Button type="submit" variant="secondary" className="w-100">
                Send Message
              </Button>
              <input
                type="hidden"
                name="_next"
                value="https://adelindiac.site/"></input>
            </Form>
          </div>
        </Container>
      ) : (
        <div>
          <button
            type="button"
            className="btn btn-outline-light btn-lg"
            onClick={showForm}>
            Contact Me
          </button>
        </div>
      )}
    </div>
  );
};
export default ContactPage;
