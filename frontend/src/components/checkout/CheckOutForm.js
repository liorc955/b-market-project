import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const CheckOutForm = (props) => {
  const [validated, setValidated] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();

  const formGroupClass =
    "d-flex justify-content-center align-items-center mb-3";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      props.postNewOrder({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        zip: zipRef.current.value,
      });
    }
    setValidated(true);
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-50">
        <h5 className="text-center mb-4 mt-2">
          Please provide the requested information below to ensure a seamless
          process and enable us to serve you better:
        </h5>
        <Row className={formGroupClass}>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              ref={firstNameRef}
              disabled={props.isErrorOnGet}
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              ref={lastNameRef}
              disabled={props.isErrorOnGet}
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className={formGroupClass}>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              ref={cityRef}
              disabled={props.isErrorOnGet}
              type="text"
              placeholder="City"
              required
            />
            <Form.Control.Feedback type="invalid">
              Provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              ref={stateRef}
              disabled={props.isErrorOnGet}
              type="text"
              placeholder="State"
              required
            />
            <Form.Control.Feedback type="invalid">
              Provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              disabled={props.isErrorOnGet}
              ref={zipRef}
              type="text"
              placeholder="Zip"
              required
            />
            <Form.Control.Feedback type="invalid">
              Provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className={formGroupClass}>
          <Form.Check
            required
            disabled={props.isErrorOnGet}
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <div className="text-center">
          <Button disabled={props.isThereError} type="submit">
            Place Order
          </Button>
          {props.isErrorOnPost && (
            <Form.Control.Feedback style={{color: 'red'}}>
              Please Try Again
            </Form.Control.Feedback>
          )}
        </div>
      </Form>
    </>
  );
};

export default CheckOutForm;
