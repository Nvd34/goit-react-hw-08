import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { editContact } from '../../redux/contacts/operations';
import { IoIosClose } from 'react-icons/io';
import css from './EditContactModal.module.css';

export default function EditContactModal({
  isOpen,
  onClose,
  contact: { id, name, number },
}) {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const phoneRegExp =
    /^(([\\+][1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const FormSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(phoneRegExp, 'Enter valid number(ex:+380xxxxxxxxx).')
      .required('Required'),
  });

  const initialValues = {
    username: name,
    number: number,
  };
  const handleSubmit = values => {
    if (
      values.username !== initialValues.username ||
      values.number !== initialValues.number
    ) {
      dispatch(
        editContact({ id, name: values.username, number: values.number })
      );
    }
    onClose();
  };

  return (
    <Modal className={css.editModal} isOpen={isOpen} onRequestClose={onClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={values => handleSubmit(values)}
        validationSchema={FormSchema}
      >
        <Form className={css.editForm}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.editInput}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage name="username" component="span" />
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.editInput}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" component="span" />
          <button className={css.editBtn} type="submit">
            Edit contact
          </button>
          <button className={css.closeBtn} type="button" onClick={onClose}>
            <IoIosClose wi className={css.closeIcon} />
          </button>
        </Form>
      </Formik>
    </Modal>
  );
}
