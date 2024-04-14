import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();
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
    username: '',
    number: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        dispatch(addContact({ name: values.username, number: values.number }));
        action.resetForm();
      }}
      validationSchema={FormSchema}
    >
      <Form className={css.formContact}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={css.inputContact}
          type="text"
          name="username"
          id={nameFieldId}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="username"
          component="span"
        />
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={css.inputContact}
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
