import styles from './Burger.module.scss';

type buttonProps = {
  open: boolean;
  setOpen: Function;
};

export const Burger = ({ open, setOpen }: buttonProps) => {
  const bars = {
    bar1: '',
    bar2: '',
    bar3: '',
  };

  if (open === true) {
    bars.bar1 = styles.bar1_active;
    bars.bar2 = styles.bar2_active;
    bars.bar3 = styles.bar3_active;
  }
  return (
    <div
      onClick={() => {
        setOpen();
      }}
      className={styles.burger}
    >
      <span className={`${styles.bar} ${bars.bar1}`}></span>
      <span className={`${styles.bar} ${bars.bar2}`}></span>
      <span className={`${styles.bar} ${bars.bar3}`}></span>
    </div>
  );
};
