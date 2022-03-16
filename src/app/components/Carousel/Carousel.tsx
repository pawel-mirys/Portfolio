import { CarouselContainer } from './CarouselContainer';
import { SliderItem } from '../SliderItem/SliderItem';

export const Carousel = () => {
  const arrayOfSliderItems = [
    <SliderItem path="/assets/images/EET.png" />,
    <SliderItem path="/assets/images/MBP.png" />,
    <SliderItem path="/assets/images/travelWebsite.png" />,
    <SliderItem path="/assets/images/colorPicker.png" />,
    <SliderItem path="/assets/images/drumMachine.png" />,
    <SliderItem path="/assets/images/countdown.png" />,
  ];

  return (
    <CarouselContainer
      sliderItems={arrayOfSliderItems.map((item) => (
        <div key={item.props.path}>{item}</div>
      ))}
    />
  );
};
