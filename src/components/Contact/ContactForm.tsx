import React from 'react'
import { Form, Formik, useField } from 'formik'
import { toast } from 'react-toastify'
import {
  StyledInput,
  StyledTextArea,
  InputError,
} from 'components/Contact/ContactForm.style'
import Button from 'components/Button'
import * as Yup from 'yup'

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
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          await fetch('https://formspree.io/f/meqnwppn', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              Accept: 'application/json',
            },
          })
          toast.info('Wysłano wiadomość :)', {
            position: 'bottom-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        } catch {
          toast.error('Błąd - nie wysłano wiadomości :(', {
            position: 'bottom-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        } finally {
          resetForm()
          setSubmitting(false)
        }
      }}
    >
      <>
        <Form>
          <Input type="text" name="name" placeholder="Imię" />
          <Input type="text" name="email" placeholder="Email" />
          <TextArea name="message" placeholder="Wiadomość" />
          <Button text="Wyślij" type="submit" />
        </Form>
      </>
    </Formik>
  )
}

export default ContactForm
