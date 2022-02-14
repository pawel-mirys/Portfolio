import { useState } from 'react';

import styles from './Contact.module.scss';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactContainer } from './ContactContainer';

export const Contact = () => {
  const [formActive, setFormActive] = useState(false);

  const getComponent = () => {
    let component: JSX.Element | any;
    switch (formActive) {
      case false:
        component = (
          <ContactContainer
            showForm={() => {
              setFormActive(true);
            }}
          />
        );
        break;
      case true:
        component = (
          <ContactForm
            closeForm={() => {
              setFormActive(false);
            }}
          />
        );
        break;
    }
    return component;
  };
  return (
    <section id="contact" className={styles.contactContainer}>
      {getComponent()}
    </section>
  );
};
