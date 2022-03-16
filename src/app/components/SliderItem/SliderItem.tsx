import styles from './SliderItem.module.scss';
import { Image } from '../Image/Image';
import { SliderItemLinks } from '../SliderItemPopup/SliderItemLinks';

type SliderItemProps = {
  path: string;
  alt?: string;
  siteLink?: string;
  githubLink?: string;
};

export const SliderItem = ({
  path,
  alt,
  githubLink,
  siteLink,
}: SliderItemProps) => {
  return (
    <div className={styles.slide}>
      <Image className={styles.sliderItem} path={path} alt={alt} />
      <SliderItemLinks githubLink={githubLink} siteLink={siteLink} />
    </div>
  );
};
