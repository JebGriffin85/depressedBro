import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SingupForm from './SignupForm.js';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a className='signup-btn' onClick={() => setShowModal(true)}>Sign-Up</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SingupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;