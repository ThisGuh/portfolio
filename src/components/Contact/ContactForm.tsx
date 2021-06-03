import React from 'react'
import { Form, Formik, useField } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
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

interface EncodedData {
  'form-name': 'contact-form'
  [key: string]: string
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

const encode = (data: EncodedData) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
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
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact-form', ...values }),
        })
          .then(() => {
            toast.info('Wiadomość została wysłana', {
              position: 'bottom-right',
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            resetForm()
          })
          .catch(() => {
            toast.error('Błąd: wiadomość nie została wysłana', {
              position: 'bottom-right',
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          })
          .finally(() => setSubmitting(false))
      }}
    >
      <>
        <Form name="contact-form" data-netlify data-netlify-recaptcha>
          <input type="hidden" name="form-name" value="contact" />
          <Input type="text" name="name" placeholder="Imię" />
          <Input type="text" name="email" placeholder="Email" />
          <TextArea name="message" placeholder="Wiadomość" />
          <div data-netlify-recaptcha="true"></div>
          <Button text="Wyślij" type="submit" />
        </Form>
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    </Formik>
  )
}

export default ContactForm
