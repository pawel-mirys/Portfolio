import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import styles from './ContactForm.module.scss';
import { ActionButton } from '../ActionButton/ActionButton';
import { SentMessage } from '../SentMessage/SentMessage';

type ContactFormProps = {
  closeForm: Function;
};
export const ContactForm = ({ closeForm }: ContactFormProps) => {
  const form: any = useRef();
  const [messageSent, setMessageSent] = useState(false);
  console.log(messageSent);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setTimeout(() => {
            setMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.formContainer}>
      <h4>Kontakt</h4>

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
            className={styles.input}
            type="email"
            name="user_email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className={`${styles.formItem} ${styles.messageContainer}`}>
          <label className={styles.label}>Wiadomość *</label>
          <textarea className={styles.textArea} name="message" required />
        </div>
        <input className={styles.inputSubmit} type="submit" value="Wyślij" />
        <SentMessage isSent={messageSent} />
      </form>
    </div>
  );
};
