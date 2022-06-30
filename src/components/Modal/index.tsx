import React, { useState, useEffect } from "react";
import "./index.less";

interface ModalProps {
  bodyStyle: Object;
  afterClose: Function;
  cancelBack: Function;
  sureBack: Function;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { bodyStyle } = props;
  return (
    <div className="modal_wrapper">
      <div className="custome_modal_box" style={bodyStyle}></div>
    </div>
  );
};

export default Modal;
