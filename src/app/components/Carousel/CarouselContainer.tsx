import React from 'react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './Carousel.module.scss';

type CarouselContainerProps = {
  sliderItems: JSX.Element[];
};

export const CarouselContainer = ({ sliderItems }: CarouselContainerProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: true,
    fade: true,
    arrows: true,
    respnsive: true,
  };

  const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return {
      width,
    };
  };

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(getWindowWidth());
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    });
    return windowWidth;
  };
  const windowWidth = useWindowWidth();

  windowWidth.width <= 700
    ? (settings.arrows = false)
    : (settings.arrows = true);

  return (
    <div className={styles.silderContainer}>
      <Slider className={styles.carousel} {...settings}>
        {sliderItems}
      </Slider>
    </div>
  );
};
