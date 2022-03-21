import { Icon } from '../Icon/Icon';
import styles from './SliderItemLinks.module.scss';

type SliderItemLinksProps = {
  githubLink?: string;
  siteLink?: string;
};

export const SliderItemLinks = ({
  githubLink,
  siteLink,
}: SliderItemLinksProps) => {
  return (
    <div className={styles.linksContainer}>
      <div className={styles.links}>
        <a href={githubLink}>
          <Icon className={styles.icon} path="/assets/icons/github2.svg" />
        </a>
        <a href={siteLink}>
          <Icon className={styles.icon} path="/assets/icons/site.svg" />
        </a>
      </div>
    </div>
  );
};
