import { useState } from 'react';

import styles from './Nav.module.scss';
import { Image } from '../Image/Image';
import { Burger } from '../Burger/Burger';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  let activeListStyle: string = '';
  if (open === true) {
    activeListStyle = styles.list_active;
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <a href="#">
          <Image
            className="logo"
            path="/assets/images/logo100.png"
            alt="Logo"
          />
        </a>
        <Burger
          open={open}
          setOpen={() => {
            if (open === false) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
        />
        <ul className={`${styles.list} ${activeListStyle}`}>
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
