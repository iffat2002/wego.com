import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Stack,
  Hidden,
  Container,
} from "@mui/material";
import Header from "../Header/Header";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import HeroTabs from "./HeroTabs";
import styles from "@/styles/Home.module.css";

const slides = [
  {
    id: 1,
    image:
      "https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_2560/v1678790459/web/campaigns/autumn-season/hero-image_1.jpg",
  },
  {
    id: 2,
    image:
      "https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_2560/v1678790459/web/campaigns/autumn-season/hero-image_2.jpg",
  },
  {
    id: 3,
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
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="100%">
      {/* Header */}
      {/* <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={2}
        sx={{ width: "84%", margin: "auto" }}
      >
        <Header />
      </Box> */}
      {/* Hero section background slides */}
      <Box
        position="relative"
        overflow="hidden"
      
        sx={{
          height: {
            xs: "240px", // Extra small screens
      sm: "240px", // Small screens
      md: "390px", // Medium screens
      lg: "544px", 
          },
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
              {/* heading for large screens */}
              <Hidden mdDown>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{
                  
                    fontSize: "36px",
                    fontWeight: "600",

                    lineHeight: "1.67",
                    position: "absolute",
                    top: {lg:"174px", md:"144px"},
                  }}
                >
                  Discover the real value of travel
                </Typography>

                <Box justifyContent="center" mt={13} sx={{display:{lg:"flex", md:"none"}}}>
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
              </Hidden>
              {/* logo for smaller screens */}
              <Hidden mdUp>
                <Box
                 
                  sx={{
                    width: "128px",
                    height: "58px",
                    backgroundImage:
                      "url(https://assets.wego.com/image/upload/w_256,h_116/v1472795189/wego_logos/logo-wego-white.png)",
                    filter: "drop-shadow(1px 0 2px #27242c)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50%",
                    backgroundSize: "contain",
                    marginTop:"-40px"
                  }}
                />
              </Hidden>
            </Stack>
          </Box>
        ))}
      </Box>
      {/* Hero section content */}
      <Box sx={{ marginTop: {lg:"-14%", xs:"-60px", md:"-130px"},}}>
        <HeroTabs />
      </Box>
    </Box>
  );
};

export default Hero;
