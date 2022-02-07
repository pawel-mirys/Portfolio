import { Carousel } from '../../components/Carousel/Carousel';
import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className={styles.projectsContainer} id="projects">
      <div className={styles.projectsWrapper}>
        <h4>Projekty</h4>
        <Carousel />
      </div>
    </section>
  );
};
