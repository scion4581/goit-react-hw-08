import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const REQUIRED_ERROR_MESSAGE = 'Required';
const WRONG_EMAIL_FORMAT_ERROR_MESSAGE = 'Invalid email format';
const MIN_LENGHT = 7;

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  email: Yup.string().email(WRONG_EMAIL_FORMAT_ERROR_MESSAGE).required(REQUIRED_ERROR_MESSAGE),
  password: Yup.string().required(REQUIRED_ERROR_MESSAGE).min(MIN_LENGHT),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((reponse) => {
        toast.success('Success!');
      })
      .catch((error) => {
        toast.error('Error, try one more time!');
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={registerValidationSchema}
    >
      <Form className={css.form} autoComplete='off'>
        <label className={css.label}>
          Username
          <Field className={css.input} type='text' name='name' />
          <ErrorMessage className={css.errorMessage} name='name' component='span' />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type='email' name='email' />
          <ErrorMessage className={css.errorMessage} name='email' component='span' />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type='password' name='password' />
          <ErrorMessage className={css.errorMessage} name='password' component='span' />
        </label>
        <button type='submit'>Register</button>
      </Form>
    </Formik>
  );
}
