import { useState } from 'react';

import styles from './Contact.module.scss';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactInfo } from '../../components/ContactInfo/ContactInfo';

export const ContactContainer = () => {
  const [formActive, setFormActive] = useState(false);

  return (
    <section id="contact" className={styles.contactContainer}>
      {formActive && (
        <ContactForm
          closeForm={() => {
            setFormActive(false);
          }}
        />
      )}
      {!formActive && (
        <ContactInfo
          showForm={() => {
            setFormActive(true);
          }}
        />
      )}
    </section>
  );
};
