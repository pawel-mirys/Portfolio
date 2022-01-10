import { useState } from 'react';
import styles from './Burger.module.scss';

type buttonProps = {};

export const Burger = () => {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div
        onClick={() => {
          setOpen(true);
        }}
        className={styles.burger}
      >
        <span className={`${styles.bar} ${styles.bar1}`}></span>
        <span className={`${styles.bar} ${styles.bar2}`}></span>
        <span className={`${styles.bar} ${styles.bar3}`}></span>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={styles.burger}
      >
        <span className={`${styles.bar} ${styles.bar1_active}`}></span>
        <span className={`${styles.bar} ${styles.bar2_active}`}></span>
        <span className={`${styles.bar} ${styles.bar3_active}`}></span>
      </div>
    );
  }
};
