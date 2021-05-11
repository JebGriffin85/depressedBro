import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPostForm from './EditPostForm';
import styles from './editpost.module.css';

function EditPostModal({oldTitle, oldBody, postId }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <a className={styles.editpost} onClick={() => setShowModal(true)}>Edit Post</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPostForm oldTitle={oldTitle} oldBody={oldBody} postId={postId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditPostModal;