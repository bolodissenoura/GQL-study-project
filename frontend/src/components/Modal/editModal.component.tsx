/* eslint-disable react/display-name */
import React from "react"
import Modal from 'react-modal';

interface EditModalInterface {
  titleModal?: string
}

type Ref = {
  openModal: () => void
} | null;

export const EditModal = React.forwardRef((props: EditModalInterface, ref) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    openModal() {
      setIsOpen(true);
    }
  }));

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 >Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    </>
  )
})