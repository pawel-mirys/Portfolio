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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          necessitatibus nostrum magni esse quod inventore facilis magnam
          dignissimos quis commodi tenetur harum recusandae non, molestias
          dolore tempore ipsam in totam!
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
