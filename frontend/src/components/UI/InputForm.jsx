import Form from "react-bootstrap/Form";

const InputForm = (props) => {
  return (
    <Form.Group as={props.as} md={props.md} controlId={props.controlId}>
      <Form.Label>{props.lbTitle}</Form.Label>
      <Form.Control
      {...props.attributes}
      />
      <Form.Control.Feedback>{props.fbText}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default InputForm;