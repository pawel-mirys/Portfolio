import clsx from 'clsx';
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
    <div className={clsx(styles.socialMediaContainer, className)}>
      <a
        className={styles.socialIcon}
        href="https://www.facebook.com/Shine1011"
      >
        <Image
          path="/assets/icons/facebook.svg"
          alt="facebook"
          className={clsx(styles.icon, customIcon, 'facebook')}
        />
      </a>
      <a
        className={styles.socialIcon}
        href="https://www.instagram.com/yoshixcity/"
      >
        <Image
          path="/assets/icons/instagram.svg"
          alt="instagram"
          className={clsx(styles.icon, customIcon, 'instagram')}
        />
      </a>
      <a className={styles.socialIcon} href="https://github.com/pawel-mirys">
        <Image
          path="/assets/icons/github.svg"
          alt="github"
          className={clsx(styles.icon, customIcon, 'github')}
        />
      </a>
      <a
        className={styles.socialIcon}
        href="https://www.linkedin.com/in/pawel-mirys/"
      >
        <Image
          path="/assets/icons/linkedin.svg"
          alt="linkedin"
          className={clsx(styles.icon, customIcon, 'linkedin')}
        />
      </a>
    </div>
  );
};
