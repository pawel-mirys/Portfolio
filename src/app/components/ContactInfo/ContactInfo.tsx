import { ActionButton } from '../ActionButton/ActionButton';
import { Image } from '../Image/Image';
import styles from './ContactInfo.module.scss';
type ContactInfoProps = {
  showForm: Function;
};

export const ContactInfo = ({ showForm }: ContactInfoProps) => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContent}>
        <h4>Kontakt</h4>
        <p>
          Jeśli chcesz się ze mną skontaktować kliknij przycisk poniżej,
          wypełnij formularz i wyślij wiadomość. <br /> Jeśli chcesz użyć
          swojego komunikatora możesz napisać na adres: pawel.mirys@gmail.com
        </p>
        <ActionButton
          text="Wyślij wiadomość"
          className={styles.showFormButton}
          onClick={() => {
            showForm();
          }}
        />
      </div>
      <Image
        path="/assets/images/logo520.png"
        alt=""
        className={styles.contactLogo}
      />
    </div>
  );
};
