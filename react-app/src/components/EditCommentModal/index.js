import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditCommentForm';
import styles from './editcomment.module.css';

function EditCommentModal({id, oldBody, postId }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <a className={styles.editbutton} onClick={() => setShowModal(true)}>Edit</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm id={id} oldBody={oldBody} postId={postId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditCommentModal;