import styles from './Hero.module.scss';
import { SocialMedia } from '../../components/SocialMedia/SocialMedia';
import { Image } from '../../components/Image/Image';

export const Hero = () => {
  return (
    <section id="Hero" className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.greetContainer}>
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

        <a href="" className={styles.arrow}>
          <Image
            path="/assets/icons/arrow.svg"
            alt="dsadsadsa"
            className={styles.arrowSvg}
          />
        </a>
      </div>
    </section>
  );
};
