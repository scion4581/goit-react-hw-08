import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const REQUIRED_ERROR_MESSAGE = 'Required';
const WRONG_EMAIL_FORMAT_ERROR_MESSAGE = 'Invalid email format';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email(WRONG_EMAIL_FORMAT_ERROR_MESSAGE).required(REQUIRED_ERROR_MESSAGE),
  password: Yup.string().required(REQUIRED_ERROR_MESSAGE),
});

export default function LoginForm() {

   const dispatch = useDispatch();

   const handleSubmit = (values, actions) => {
     dispatch(login(values))
       .unwrap()
       .then((reponse) => {
         console.log(reponse);
         toast.success('Success!!!');
       })
       .catch((error) => {
         toast.error('Email or password wrong');
       });

     actions.resetForm();
   };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={loginValidationSchema}
    >
      <Form className={css.form} autoComplete='off'>
        <label className={css.label}>
          Email
          <Field className={css.input} type='email' name='email' />
          <ErrorMessage className={css.errorMessage} name='email' component='span'/>
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type='password' name='password' />
          <ErrorMessage className={css.errorMessage} name='password' component='span'/>
        </label>
        <button type='submit'>LogIn</button>
      </Form>
    </Formik>
  );
}
