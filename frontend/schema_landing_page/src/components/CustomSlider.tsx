// src/components/CustomSlider.tsx
import { Box } from '@chakra-ui/react';
import Slider from "react-slick";

const CustomSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box width="100%">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomSlider;
