import { SwiperSlide } from 'swiper/react';

import { CarouselContainer } from './CarouselContainer';
import { SliderItem } from '../SliderItem/SliderItem';

export const Carousel = () => {
  const arrayOfSliderItems = [
    <SliderItem
      path="/assets/images/EET.png"
      siteLink="https://pawel-mirys.github.io/EET/"
      githubLink="https://github.com/pawel-mirys/EET"
    />,
    <SliderItem
      path="/assets/images/MBP.png"
      siteLink="https://pawel-mirys.github.io/MBP-Myslowice/"
      githubLink="https://github.com/pawel-mirys/MBP-Myslowice"
    />,
    <SliderItem
      path="/assets/images/travelWebsite.png"
      siteLink="https://pawel-mirys.github.io/Website-Project/"
      githubLink="https://github.com/pawel-mirys/Website-Project"
    />,
    <SliderItem
      path="/assets/images/colorPicker.png"
      siteLink="pawel-mirys.github.io/color-picker/"
      githubLink="https://github.com/pawel-mirys/Color-Picker"
    />,
    <SliderItem
      path="/assets/images/drumMachine.png"
      siteLink="pawel-mirys.github.io/beatmaker/"
      githubLink="https://github.com/pawel-mirys/BeatMaker"
    />,
    <SliderItem
      path="/assets/images/countdown.png"
      siteLink="pawel-mirys.github.io/timer/"
      githubLink="https://github.com/pawel-mirys/Timer"
    />,
  ];

  return (
    <CarouselContainer
      sliderItems={arrayOfSliderItems.map((item) => (
        <SwiperSlide key={item.props.path}>{item}</SwiperSlide>
      ))}
    />
  );
};
