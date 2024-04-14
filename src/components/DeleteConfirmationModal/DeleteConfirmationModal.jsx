import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './DeleteConfirmationModal.module.css';

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  contact: { id, name, number },
}) {
  const dispatch = useDispatch();

  const handleOnConfirm = () => {
    dispatch(deleteContact(id));
    onClose();
  };
  return (
    <Modal className={css.modalDel} isOpen={isOpen} onRequestClose={onClose}>
      <h2>Are you sure you want to delete this contact?</h2>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <div className={css.btnContainer}>
        <button className={css.btnDel} onClick={handleOnConfirm}>
          Delete
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
}
