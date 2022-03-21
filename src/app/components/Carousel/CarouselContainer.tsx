import { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import styles from './Carousel.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type CarouselContainerProps = {
  sliderItems: JSX.Element[];
};

export const CarouselContainer = ({ sliderItems }: CarouselContainerProps) => {
  return (
    <div className={styles.silderContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {sliderItems}
      </Swiper>
    </div>
  );
};
