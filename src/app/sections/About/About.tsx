import { SocialMedia } from '../../components/SocialMedia/SocialMedia';
import { Image } from '../../components/Image/Image';
import styles from './About.module.scss';

export const About = () => {
  return (
    <section id="About" className={styles.aboutContainer}>
      <div className={styles.about}>
        <div className={styles.greet}>
          <h1>Cześć!</h1>
          <h4>Nazywam się Paweł Mirys</h4>
          <h4>Jestem front-end developerem</h4>
          <SocialMedia variant="hero" />
        </div>
        <div className={styles.hero}>
          <Image
            className={styles.hero}
            path="/assets/images/hero.jpg"
            alt="Me"
          />
        </div>
      </div>
    </section>
  );
};
