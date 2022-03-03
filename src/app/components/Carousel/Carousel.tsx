import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { Image } from '../Image/Image';
import styles from './Carousel.module.scss';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: true,
    fade: true,
    arrows: true,
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

  if (windowWidth.width <= 780) {
    settings.arrows = false;
  }

  return (
    <div className={styles.silderContainer}>
      <Slider className={styles.carousel} {...settings}>
        <div className={styles.slide}>
          <a href="">
            <Image
              className={styles.sliderItem}
              path="/assets/images/EET.png"
              alt=""
            />
          </a>
        </div>
        <div className={styles.slide}>
          <a href="">
            <Image
              className={styles.sliderItem}
              path="/assets/images/MBP.png"
              alt=""
            />
          </a>
        </div>
        <div className={styles.slide}>
          <a href="">
            <Image
              className={styles.sliderItem}
              path="/assets/images/travelWebsite.png"
              alt=""
            />
          </a>
        </div>
        <div className={styles.slide}>
          <a href="">
            <Image
              className={styles.sliderItem}
              path="/assets/images/colorPicker.png"
              alt=""
            />
          </a>
        </div>
        <div className={styles.slide}>
          <a href="">
            <Image
              className={styles.sliderItem}
              path="/assets/images/drumMachine.png"
              alt=""
            />
          </a>
        </div>
        <div className={styles.slide}>
          <a href="">
            <Image
              className={styles.sliderItem}
              path="/assets/images/countdown.png"
              alt=""
            />
          </a>
        </div>
      </Slider>
    </div>
  );
};
