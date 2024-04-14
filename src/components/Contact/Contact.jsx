import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';
import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';
import { useState } from 'react';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';
import EditContactModal from '../EditContactModal/EditContactModal';

export default function Contact({ contact: { id, name, number } }) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  return (
    <li className={css.contactItem}>
      <div>
        <FaUser className={css.contactIcon}></FaUser>
        <span>{name}</span>
      </div>
      <div>
        <BsTelephoneFill className={css.contactIcon} />
        <span>{number}</span>
      </div>
      <button
        className={css.deleteContactBtn}
        onClick={() => setIsModalDeleteOpen(true)}
      >
        <FaTrash />
      </button>
      <button
        className={css.editContactBtn}
        onClick={() => setIsModalEditOpen(true)}
      >
        <FaPen />
      </button>
      <EditContactModal
        isOpen={isModalEditOpen}
        onClose={() => setIsModalEditOpen(false)}
        contact={{ id, name, number }}
      />
      <DeleteConfirmationModal
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
        contact={{ id, name, number }}
      />
    </li>
  );
}
