import emailjs from '@emailjs/browser';
import { MutableRefObject, useRef, useState } from 'react';

import styles from './ContactForm.module.scss';
import { ActionButton } from '../ActionButton/ActionButton';
import { SentMessage } from '../SentMessage/SentMessage';

type ContactFormProps = {
  closeForm: Function;
};

export const ContactForm = ({ closeForm }: ContactFormProps) => {
  const form: any = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');
  const [messageTextValue, setMessageTextValue] = useState('');

  const resetInputs = () => {
    setNameInputValue('');
    setEmailInputValue('');
    setMessageTextValue('');
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    const emailSent = () => {
      setMessageSent(true);
      resetInputs();
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    };

    emailjs
      .sendForm(
        'service_29532rp',
        'template_e8kel6i',
        form.current,
        'user_t2E57Tmdf2Fsx5ZePSs8J'
      )
      .then(
        (result) => {
          console.log(result.text);
          emailSent();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <ActionButton
          doAction={() => {
            closeForm();
          }}
          text="X"
          className={styles.closeButton}
        />
        <div className={styles.formItem}>
          <label className={styles.label}>Imię i Nazwisko *</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNameInputValue(e.target.value);
            }}
            value={nameInputValue}
            className={styles.input}
            type="text"
            name="user_name"
            placeholder="Jan Kowalski"
            required
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.label}>Email *</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmailInputValue(e.target.value);
            }}
            value={emailInputValue}
            className={styles.input}
            type="email"
            name="user_email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className={`${styles.formItem} ${styles.messageContainer}`}>
          <label className={styles.label}>Wiadomość *</label>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setMessageTextValue(e.target.value);
            }}
            value={messageTextValue}
            className={styles.textArea}
            name="message"
            minLength={20}
            placeholder="Wiadomość musi zawierać przynajmniej 20 znaków"
            required
          />
        </div>
        <input className={styles.inputSubmit} type="submit" value="Wyślij" />
        <SentMessage isSent={messageSent} />
      </form>
    </div>
  );
};
