import React from "react";
import { Accordion } from "react-bootstrap";

const FaqItem = ({ eventKey, question, answer }) => (
  <Accordion className="mb-3">
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{question}</Accordion.Header>
      <Accordion.Body>{answer}</Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export default FaqItem;
