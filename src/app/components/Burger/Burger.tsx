import clsx from 'clsx';

import styles from './Burger.module.scss';

type buttonProps = {
  open: boolean;
  setOpen: Function;
};

export const Burger = ({ open, setOpen }: buttonProps) => {
  return (
    <div
      onClick={() => {
        setOpen();
      }}
      className={styles.burger}
    >
      <span className={clsx(styles.bar, open && styles.bar1_active)}></span>
      <span className={clsx(styles.bar, open && styles.bar2_active)}></span>
      <span className={clsx(styles.bar, open && styles.bar3_active)}></span>
    </div>
  );
};
