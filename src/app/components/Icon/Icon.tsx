import clsx from 'clsx';
import styles from './Icon.module.scss';

type IconProps = {
  className?: string;
  path: string;
  alt?: string;
  description: string;
};

export const Icon = ({ className, path, alt, description }: IconProps) => {
  return (
    <div className={clsx(className, styles.iconContainer)}>
      <img
        className={styles.icon}
        src={`${process.env.PUBLIC_URL}${path}`}
        alt={alt}
      />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
