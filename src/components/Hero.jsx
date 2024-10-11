import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Stack,
  Container,
} from "@mui/material";
import Header from "./Header/Header";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import HeroTabs from "./HeroTabs";
import styles from "@/styles/Home.module.css";
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

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000); // Change slide every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box  width="100%"  >
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
        position="relative"
        overflow="hidden"
        height="544px"
        sx={{
          borderRadius: "0 0 100% 100%",
          margin: "0 -20%",
          padding: "0 20%",
          backgroundColor: "black", // Background color to minimize flash
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={slide.id}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            sx={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center 15%", // Adjust this to control positioning (e.g., "top", "bottom", "left", "right")
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover", // Use cover to fill the area
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 0.7s ease",
            
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                color="white"
                sx={{
                  textShadow: "0 4px 8px rgba(0,0,0,.5)",
                  fontSize: "36px",
                  fontWeight: "500",
                }}
              >
                Discover the real value of travel
              </Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                {slides.map((slide, index) => (
                  <Box
                    key={slide.id}
                    onClick={() => handleDotClick(index)}
                    bgcolor={currentSlide === index ? "white" : "transparent"}
                    b
                    borderRadius="50%"
                    width={12}
                    height={12}
                    mx={0.5}
                    sx={{
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                      border: "2px solid white",
                    }}
                  />
                ))}
              </Box>

              
            </Stack>
          </Box>
        ))}
        
      </Box>
      <Box sx={{marginTop:"-15%"}}>
      <HeroTabs />
      </Box>
    </Box>
  );
}; 

export default Hero;
