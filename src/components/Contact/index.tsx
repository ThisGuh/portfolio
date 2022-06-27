import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  ContactContainer,
  SocialSection,
  ContactH2,
  StyledLinkedinIcon,
  ContactEmail,
} from 'components/Contact/Contact.style'
import Button from 'components/Button'
import ContactForm from 'components/Contact/ContactForm'
import { LINKEDIN_LINK, EMAIL } from 'utility/constants'

const copyToClipboard = () => {
  navigator.clipboard.writeText(EMAIL)
  toast.info('Skopiowano adres e-mail', {
    position: 'bottom-left',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
  toast.clearWaitingQueue()
}

function Contact() {
  return (
    <>
      <ContactH2 id="Kontakt">Kontakt</ContactH2>
      <ContactContainer>
        <SocialSection>
          <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
            <StyledLinkedinIcon />
          </a>
          <ContactEmail onClick={copyToClipboard}>{EMAIL}</ContactEmail>
          <Button text="Skopiuj" small onClick={copyToClipboard} />
        </SocialSection>
        <ContactForm />
      </ContactContainer>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
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
  )
}

export default Contact
