import { ActionButton } from '../../components/ActionButton/ActionButton';
import styles from './About.module.scss';
export const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.circleLeft}>
        <div className={styles.background}></div>
      </div>
      <div className={styles.circleRight}>
        <div className={styles.background}></div>
      </div>
      <div className={styles.infoWrapper}>
        <h4>Trochę o mnie</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
          nostrum consequatur doloremque saepe ad quo dignissimos optio
          cupiditate pariatur qui magnam. Maxime molestias in nulla, natus
          voluptatibus tempore veritatis vel praesentium dolor veniam, obcaecati
          debitis quasi architecto similique? Sequi eos corrupti facere rerum
          ducimus, illo animi, ex esse magnam nemo eum suscipit nisi itaque hic
          quasi voluptatibus quis alias in.
        </p>
        <ActionButton doAction={() => {}} text="Czytaj Więcej" />
      </div>
    </section>
  );
};
