import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostForm from './PostForm';

function PostFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a onClick={() => setShowModal(true)}>Post</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PostForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default PostFormModal;