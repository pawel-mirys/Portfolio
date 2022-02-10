import { ActionButton } from '../../components/ActionButton/ActionButton';

import { Image } from '../../components/Image/Image';
import styles from './Contact.module.scss';

type ContactContainerProps = {
  showForm: Function;
};

export const ContactContainer = ({ showForm }: ContactContainerProps) => {
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
          doAction={() => {
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
