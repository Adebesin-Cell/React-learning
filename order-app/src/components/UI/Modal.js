import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Backdrop = function (props) {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = function (props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = function (props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
