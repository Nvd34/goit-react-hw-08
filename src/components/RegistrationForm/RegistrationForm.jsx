import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.registrForm} autoComplete="off">
        <h2>Register your account</h2>

        <div className={css.inputbox}>
          <label htmlFor="password" className={css.labelReg}>
            Username
          </label>
          <div className={css.inputContainer}>
            <Field className={css.inputReg} type="text" name="name" />
            <FaUser className={css.iconReg} />
          </div>
        </div>
        <div className={css.inputbox}>
          <label htmlFor="email" className={css.labelReg}>
            Email
          </label>
          <div className={css.inputContainer}>
            <Field className={css.inputReg} type="email" name="email" />
            <MdEmail className={css.iconReg} />
          </div>
        </div>
        <div className={css.inputbox}>
          <label htmlFor="password" className={css.labelReg}>
            Password
          </label>
          <div className={css.inputContainer}>
            {' '}
            <Field className={css.inputReg} type="password" name="password" />
            <RiLockPasswordFill className={css.iconReg} />
          </div>
        </div>
        <button className={css.registrBtn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
