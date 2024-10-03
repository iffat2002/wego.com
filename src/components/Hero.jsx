
import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Container,
} from "@mui/material";
import Header from "./Header";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const slides = [
  {
    id: 1,
    title: "Slide 1",
    image:
      "https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_2560/v1678790459/web/campaigns/autumn-season/hero-image_1.jpg",
  },
  {
    id: 2,
    title: "Slide 2",
    image:
      "https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_2560/v1678790459/web/campaigns/autumn-season/hero-image_2.jpg",
  },
  {
    id: 3,
    title: "Slide 3",
    image:
      "https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_2560/v1678790459/web/campaigns/autumn-season/hero-image_3.jpg",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000); // Change slide every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" width="100%" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={2}
        sx={{ width: "84%", margin: "auto" }}
      >
        <Header />
      </Box>
      <Box
        display="flex"
        sx={{
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`, 
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide) => (
          <Box
            key={slide.id}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: "0 0 100% 100%",
              height: "544px",
              margin: "0 -20%",
              overflow: "hidden",
              padding: "0 20%",
            }}
          >
            <Box sx={{ backgroundImage: `url(${slide.image})`, width:"100%", height:"100%", backgroundPosition: 'center 30%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: '0 32px',
    transition: 'background-image 1s ease-in-out'}}></Box>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: theme.spacing(1),
          zIndex: 1,
        }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: theme.spacing(1),
          zIndex: 1,
        }}
      >
        <ArrowForward />
      </IconButton>

      <Box display="flex" justifyContent="center" mt={2}>
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            bgcolor={currentSlide === index ? "primary.main" : "grey.400"}
            borderRadius="50%"
            width={10}
            height={10}
            mx={0.5}
            sx={{ cursor: "pointer", transition: "background-color 0.3s" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Hero;
