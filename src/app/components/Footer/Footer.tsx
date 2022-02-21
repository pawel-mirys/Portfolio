import { Image } from '../Image/Image';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <SocialMedia className={styles.socialMedia} variant="footer" />
        <a href="#">
          <Image path="/assets/images/logo100.png" alt="" className="" />
        </a>
        <p>
          ©{new Date().getFullYear()} Paweł Mirys | Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  );
};
