import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditCommentForm';

function EditCommentModal({id, oldBody, postId }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm id={id} oldBody={oldBody} postId={postId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditCommentModal;