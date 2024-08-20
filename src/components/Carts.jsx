import React from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Carts({ datas }) {
  return (
    <div id="cartapp">
      <Form>
        <FormGroup className="mb-3" controlId="details">
          <FontAwesomeIcon icon={faCartPlus} />
        </FormGroup>
      </Form>
    </div>
  );
}
