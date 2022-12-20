import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

//COMPONENTS
import { Container } from '../Container/Container';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { ContactSocial } from './ContactInfo/ContactSocial';
import { Modal } from './ContactModal/Modal';

//STYLEDCOMPONENTS
import { Section } from '../ui-component/Section';
import { Text } from '../ui-component/Text';
import { Title } from '../ui-component/Title';
import { Flex } from '../ui-component/Flex';

import ContactBackground from '../../assets/contact/contact-image.png';

import {
  SblCirc,
  SendingBtn,
  SmallButton,
  StiledForm,
  WrapperImg,
} from './Contact.styled';
import { TitleBox } from '../Portfolio/Portfolio.styled';

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const inputHandler = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const showSuccessModal = () => {
    setSuccessModal(true);
    setSending(false);
    resetForm();
  };
  // ERROR MODAL
  const showErrorModal = () => {
    setErrorModal(true);
    setSending(false);
    resetForm();
  };

  // CLOSE ALL MODALS
  const closeModal = () => {
    setSuccessModal(false);
    setErrorModal(false);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    resetForm();

    let KEY = process.env.REACT_APP_PUBLIC_KEY;
    let TID = process.env.REACT_APP_TEMPLATE_ID;
    let SID = process.env.REACT_APP_SERVICE_ID;

    // Отправляет письмо на указанную почту владельца сайта
    // https://dashboard.emailjs.com/
    // https://www.emailjs.com/docs/sdk/installation/
    // https://www.emailjs.com/docs/examples/reactjs/
    emailjs.sendForm(SID, TID, form.current, KEY).then(
      response => {
        if (response.status === 200) {
          showSuccessModal();
        } else {
          showErrorModal();
        }
      },
      error => {
        showErrorModal();
      },
    );
  };

  return (
    <Section id="contact" padding="60px 0">
      {successModal && <Modal closeModal={closeModal} status="success" />}
      {errorModal && <Modal closeModal={closeModal} status="error" />}
      <Container>
        <TitleBox>
          <Title margin="0 0 40px">CONTACT US.</Title>
          <Text margin="0 0 40px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt<br></br>ut labore et dolore magna aliqua.
          </Text>
        </TitleBox>
        <Flex laptop margin="0 0 60px 0" align="center" justify="space-between">
          <StiledForm id="contactForm" ref={form} onSubmit={handleSubmit}>
            <h4>Send Us Message.</h4>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={inputHandler}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={inputHandler}
            />
            <textarea
              rows="6"
              cols="50"
              placeholder="Message..."
              required
              name="message"
              value={message}
              onChange={inputHandler}
            ></textarea>

            {sending ? (
              <SendingBtn>
                <Flex direction="center">
                  <SblCirc />
                </Flex>
              </SendingBtn>
            ) : (
              <SmallButton>
                <button
                  aria-label="send message"
                  type="submit"
                  value="Send Message"
                >
                  Send Message
                </button>
              </SmallButton>
            )}
          </StiledForm>

          <WrapperImg>
            <img src={ContactBackground} alt="contact background" />
          </WrapperImg>
        </Flex>
        <ContactInfo />
        <ContactSocial />
      </Container>
    </Section>
  );
};
