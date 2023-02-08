import React from "react";
import MessageModal from "../MessageModal/MessageModal";

function ModelHelper({ show, onHide, modalBody, modalFooter }) {
  return (
    <MessageModal
      show={show}
      modalBody={modalBody}
      onHide={onHide}
      modalFooter={modalFooter}
    />
  );
}

export default ModelHelper;
