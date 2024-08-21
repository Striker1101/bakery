import React from "react";
import { FormGroup, Row, Col, FormControl, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Carts({ datas }) {
  const totalPrice = datas.reduce((acc, item) => acc + item.price, 0);

  return (
    <div id="cartapp" className="p-3">
      <Form>
        <FormGroup className="mb-3" controlId="details">
          <Row className="align-items-center">
            <Col xs={4} className="text-end">
              <Button variant="success">
                <FontAwesomeIcon icon={faCartPlus} /> {datas.length} Items
              </Button>
            </Col>

            <Col className="text-end">
              <Button>Total: ${totalPrice.toFixed(2)}</Button>
            </Col>
          </Row>
        </FormGroup>

        {datas.map((data, index) => (
          <FormGroup key={index} className="mb-3">
            <Row className="align-items-center">
              <Col xs={5}>
                <h5>{data.name}</h5>
                <p className="text-muted">{data.category}</p>
              </Col>
              <Col xs={2}>
                <FormControl
                  type="number"
                  min="1"
                  defaultValue="1"
                  name="amount"
                />
              </Col>
              <Col xs={2} className="text-end">
                <strong>${data.price.toFixed(2)}</strong>
              </Col>
            </Row>
          </FormGroup>
        ))}

        <Button variant="primary" type="submit" className="w-100">
          Checkout
        </Button>
      </Form>
    </div>
  );
}
