
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

const BackDrop = () => {
  return <div className={classes.backdrop}></div>;
};

const OverLay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
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
