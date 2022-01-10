import styles from './Nav.module.scss';
import { Image } from '../Image/Image';
import { Burger } from '../Burger/Burger';

export const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <a href="#">
          <Image path="/assets/images/logo100.png" alt="Logo" />
        </a>
        <Burger />
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="#About">
              O mnie
            </a>
          </li>
          <li>
            <a className={styles.link} href="#Projects">
              Projekty
            </a>
          </li>
          <li>
            <a className={styles.link} href="#Contakt">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
