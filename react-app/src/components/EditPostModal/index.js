import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPostForm from './EditPostForm';

function EditPostModal({oldTitle, oldBody, postId }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Post</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPostForm oldTitle={oldTitle} oldBody={oldBody} postId={postId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditPostModal;