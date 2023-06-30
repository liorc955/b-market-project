
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";
import Card from "./Card";

const BackDrop = () => {
  return <div className={classes.backdrop}></div>;
};

const OverLay = (props) => {
  return <Card className={classes.modal}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
