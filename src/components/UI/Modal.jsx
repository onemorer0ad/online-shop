import React from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const Backdrop = (props) => {
  return <div onClick={props.hideModalCard} className={s.backdrop}></div>;
};
const ModalWindow = (props) => {
  return (
    <div className={s.modal}>
      <div className={s.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop hideModalCard={props.hideModalCard} />,
        portalElement
      )}
      {createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
