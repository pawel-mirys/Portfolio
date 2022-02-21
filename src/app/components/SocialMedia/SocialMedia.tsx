import { Image } from '../Image/Image';
import styles from './SocialMedia.module.scss';

type SocialMediaProps = {
  variant: 'hero' | 'footer';
  className?: string;
};

export const SocialMedia = ({ variant, className }: SocialMediaProps) => {
  let customIcon: string = '';

  variant === 'hero'
    ? (customIcon = styles.iconBig)
    : (customIcon = styles.iconSmall);

  return (
    <div className={`${styles.socialMediaContainer} ${className}`}>
      <a className={styles.socialIcon} href="">
        <Image
          path="/assets/icons/facebook.svg"
          alt="facebook"
          className={`${styles.icon} ${customIcon} facebook`}
        />
      </a>
      <a className={styles.socialIcon} href="">
        <Image
          path="/assets/icons/instagram.svg"
          alt="instagram"
          className={`${styles.icon} ${customIcon} instagram`}
        />
      </a>
      <a className={styles.socialIcon} href="">
        <Image
          path="/assets/icons/github.svg"
          alt="github"
          className={`${styles.icon} ${customIcon} github`}
        />
      </a>
      <a className={styles.socialIcon} href="">
        <Image
          path="/assets/icons/linkedin.svg"
          alt="linkedin"
          className={`${styles.icon} ${customIcon} linkedin`}
        />
      </a>
    </div>
  );
};
