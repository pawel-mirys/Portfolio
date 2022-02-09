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
    <nav className={styles.navContainer}>
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
            open === false ? setOpen(true) : setOpen(false);
          }}
        />
        <ul className={`${styles.list} ${activeListStyle}`}>
          <li>
            <a className={styles.link} href="#about">
              O mnie
            </a>
          </li>
          <li>
            <a className={styles.link} href="#projects">
              Projekty
            </a>
          </li>
          <li>
            <a className={styles.link} href="#contact">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
