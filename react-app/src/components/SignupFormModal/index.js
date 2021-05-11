import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SingupForm from './SignupForm.js';
import styles from './signupform.module.css';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div >
      <a className={styles.signupLink} onClick={() => setShowModal(true)}>Sign-Up</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SingupForm />
        </Modal>
      )}
    </div>
  );
}

export default SignupFormModal;