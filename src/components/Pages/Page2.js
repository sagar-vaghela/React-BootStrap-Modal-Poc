import React, { useState } from 'react'
import MessageModal from '../MessageModal/MessageModal';

export default function Page2() {

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const changeText = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div>
      <h4>Page 2</h4>
      <div className="form-floating">
        <textarea className="form-control mb-3" placeholder="Enter Message Here" id="floatingTextarea" onChange={changeText}></textarea>
        <label for="floatingTextarea">Message</label>
        <button type="button" className="btn btn-primary" disabled={message === ''} onClick={() => setShowModal(true)}>Show</button>
      </div>

      <MessageModal
        show={showModal}
        onHide={() => setShowModal(false)}
        modalBody={message}
      />

    </div>
  )
}
