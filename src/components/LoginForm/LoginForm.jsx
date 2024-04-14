import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import css from './LoginForm.module.css';
import * as Yup from 'yup';

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  const FormSchema = Yup.object().shape({
    email: Yup.string().min(1).required('Required'),
    password: Yup.string().min(1).required('Required'),
  });

  return (
    <div className={css.logInSection}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={css.formLogIn} autoComplete="off">
          <h2 className={css.logInTitle}>Please log in</h2>
          <div className={css.inputbox}>
            <MdEmail className={css.iconLogIn} />
            <label htmlFor="email" className={css.labelLogIn}>
              Email
            </label>
            <Field className={css.inputLogIn} type="email" name="email" />
          </div>
          <div className={css.inputbox}>
            <RiLockPasswordFill className={css.iconLogIn} />

            <label htmlFor="password" className={css.labelLogIn}>
              Password
            </label>
            <Field className={css.inputLogIn} type="password" name="password" />
          </div>
          <button className={css.LogInBtn} type="submit">
            Log in
          </button>
          <div className={css.register}>
            <p>
              Don't have a account <Link to="/register">register</Link>
            </p>
          </div>
        </Form>
      </Formik>
      {/* <p>
        or <Link to="/register">register</Link>
      </p> */}
    </div>
  );
}

{
  /* <section>
<form>
<h1>Login</h1>
<div class="inputbox">
<ion-icon name="mail-outline"></ion-icon>
<input type="ema i1" required>
<label for="">Emvil</label>
</div>
<div class="inputbox '>
<ion-icon name="Jock-closed-outline"></ion-icon>
<input type="pa'word" required>
<label for="">paisword</label>
</div>
<div class="forget">
<label for=""><i put type="checkbox">Remember Me</label>
<a href="#">Forget Password</a>
</div>
<button>Log in</button>
<div class="register">
<p>Don't have a account <a href="#">Register</a></p>
</div>
</form>
</section>| */
}
