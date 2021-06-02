import React from 'react'
import { Form, Formik, useField } from 'formik'
import {
  StyledInput,
  StyledTextArea,
  InputError,
} from 'components/Contact/ContactForm.style'
import Button from 'components/Button'
import * as Yup from 'yup'

interface Values {
  name: string
  email: string
  message: string
}

interface InputProps {
  type?: 'text'
  name: 'name' | 'email' | 'message'
  placeholder: 'Imię' | 'Email' | 'Wiadomość'
}

const Input = ({ ...props }: InputProps) => {
  const [field, meta] = useField(props)

  return (
    <>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <InputError>{meta.error}</InputError>
      ) : null}
    </>
  )
}

const TextArea = ({ ...props }: InputProps) => {
  const [field, meta] = useField(props)

  return (
    <>
      <StyledTextArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <InputError>{meta.error}</InputError>
      ) : null}
    </>
  )
}

function ContactForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Imię musi zawierać przynajmniej 3 znaki')
          .max(15, 'Imię nie może być dłuższe od 15 znaków')
          .required('Wymagane'),
        email: Yup.string().email('Nieprawidłowy email').required('Wymagane'),
        message: Yup.string()
          .min(10, 'Wiadomość zawierać przynajmniej 10 znaków')
          .max(100, 'Wiadomość nie może być dłuższa niż 100 znaków')
          .required('Wymagane'),
      })}
      onSubmit={(values: Values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resetForm()
          setSubmitting(false)
        }, 3000)
      }}
    >
      <Form>
        <Input type="text" name="name" placeholder="Imię" />
        <Input type="text" name="email" placeholder="Email" />
        <TextArea name="message" placeholder="Wiadomość" />
        <Button text="Wyślij" type="submit" />
      </Form>
    </Formik>
  )
}

export default ContactForm
