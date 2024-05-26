import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

export default function ContactForm() {
  
  const REQUIRED_ERROR_MESSAGE = 'Required';
  const MIN_LENGHT_ERROR_MESSAGE = 'Too Short!';
  const MAX_LENGHT_ERROR_MESSAGE = 'Too Long!';

  const initialFormValues = {
    name: '',
    number: ''
  };

  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, MIN_LENGHT_ERROR_MESSAGE)
      .max(50, MAX_LENGHT_ERROR_MESSAGE)
      .required(REQUIRED_ERROR_MESSAGE),
    number: Yup.string()
      .min(3, MIN_LENGHT_ERROR_MESSAGE)
      .max(50, MAX_LENGHT_ERROR_MESSAGE)
      .required(REQUIRED_ERROR_MESSAGE),
  });

  const onSubmit = (values, actions) => {
    dispatch(addContact(values))
    actions.resetForm();
  };  

  return (
    <Formik initialValues={initialFormValues} onSubmit={onSubmit} validationSchema={contactSchema}>
      <Form className={css.contactForm}>
        <div className={css.fieldGroup}>
          <label className={css.formFieldLabel} htmlFor={nameFieldId}>Name</label>
          <Field className={css.formFieldInput} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.errorMessage} name="name" component="span" />
        </div>
        <div className={css.fieldGroup}>
          <label className={css.formFieldLabel} htmlFor={numberFieldId}>Number</label>
          <Field className={css.formFieldInput} type="text" name="number" id={numberFieldId} />
          <ErrorMessage className={css.errorMessage} name="number" component="span" />
        </div>
        <button className={css.formSubmitButton} type='submit'>Add contact</button>
			</Form>
    </Formik>
  );
}