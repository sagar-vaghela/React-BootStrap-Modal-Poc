
import React from 'react'
import Modal from 'react-bootstrap/Modal';

const MessageModal = ({ modalTitle, modalBody, modalFooter, onHide , show}) => {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName='modal_common edit_modal'
            backdrop={true}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {'Message'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalBody}
            </Modal.Body>
            <Modal.Footer>
                {modalFooter}
            </Modal.Footer>
        </Modal>
    )
}

export default MessageModal;