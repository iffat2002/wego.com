import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Theme,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Container,
  CardMedia,
  Rating,
  IconButton,
  Image,
  Link,
  useTheme,

  Hidden,
  CardActions,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const stories = [
  {
    id: 1,
    title:
      "The Best Hoteles of Mision",
   property:45,
    imageUrl: "https://zen.wego.com/cdn-cgi/image/format=auto,height=368,quality=90/hotelz/s/90705301/1026655132.jpeg",
  },
  {
    id: 2,
    title:"Most Recommended Guest house in Karachi",
    property:435,
    imageUrl: "https://blog.wego.com/wp-content/uploads/solo-travel-europe-featured-480x320.webp",
  },
  {
    id: 3,
    title:"Highest Rated Hotels in Karachi",
    property:54,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/format=auto,height=368,quality=90/hotelz/s/31267718/408472041.jpg",
  },
  {
    id: 4,
    title:
      "Top 5-star hotels",
      property:112,
    imageUrl: "https://blog.wego.com/wp-content/uploads/featured-480x356.png",
  },
  {
    id: 5,
    title:"Tips, Destinations, and Itinerary",
    property:43,
    imageUrl: "https://blog.wego.com/wp-content/uploads/solo-travel-europe-featured-480x320.webp",
  },
  {
    id: 6,
    title:"Itinerary",
    property:26,
    imageUrl:
      "https://blog.wego.com/wp-content/uploads/shutterstock_2278573153-480x249.jpg",
  },
];

const HotelsInCity = () => {
    
  const dir = document.documentElement.dir;
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const cardWidth = 272;
  const handleNext = () => {
    if (dir === "rtl") {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1); // Move left in RTL
      }
    }else{
    if (currentIndex < stories.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  };
  const handlePrevious = () => {
    if (dir === "rtl") {
      if (currentIndex < stories.length - itemsPerPage) {
        setCurrentIndex(currentIndex + 1); // Move right in RTL
      }
    } else {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  };

  return (
    <Container sx={{mt:"48px", padding:0 }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 1, px:1 }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: {lg:"24px",md:"24px",sm:"24px", xs:"20px"}, fontWeight: "500", color: "black",}}
        >
        Hotels in Karachi
        </Typography>
        
      </Stack>

      <Box sx={{ position: "relative" }}>
        <Grid
          item
          xs={9}
          sx={{
            position: "relative",
            // padding: { lg: 1, xs: 0 },
            overflow: "hidden",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              //overflow: "hidden",
              display: "flex",
              margin: "auto",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                transform: dir === "rtl"
                ? `translateX(${currentIndex * (cardWidth + 16)}px)`
                : `translateX(-${currentIndex * (cardWidth + 16)}px)`,
                transition: "transform 0.5s ease-in-out",
                width: `${stories.length * (cardWidth + 16) + 16}px`,
                overflowX: { lg: "visible",md: "visible",sm:"visible" , xs: "scroll" },
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                paddingRight: dir === "ltr" ? "26px" : "0px",
              }}
            >
              {stories.map((card) => (
                <Box
                  key={card.id}
                  sx={{
                    flex: { lg: `0 0 ${cardWidth}px`,md: `0 0 ${cardWidth}px`,sm:`0 0 ${cardWidth}px`, xs: "none" },
                    padding: {lg: "8px", md:"8px",sm:"8px", xs: "0px 0px 8px 14px"},
                    boxSizing:"content-box",
                    width:{xs:"180px"},
                    pb:0
                  }}
                >
                  <Link
                    href={card.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none" }}
                  >
                    <Card
                      sx={{
                        borderRadius: "8px",
                        height: "100%",
                        boxShadow: "0 0 8px 2px rgba(0,0,0,.1)",
                        pb:0,
                        display:"flex",
                        height:"280px",
                        width:"272px",
                        overflow:"hidden",
flexDirection:"column"                      }}
                    >
                   
                    <CardContent sx={{    alignItems: "flex-start", display:"flex", flexDirection:"column",
    
    height: "calc(100% - 176px) !important"}}>
                        <Typography sx={{display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '24px',
        overflow: 'hidden',}}>{card.title}</Typography>
        <Typography sx={{color: '#767676',         
        fontSize: '12px',         
        fontWeight: 400,        
        lineHeight: '18px',        
        marginTop: '4px',}}>{card.property} properties</Typography>
                    </CardContent>
                      <Box
                 
                        sx={{
                          width: { lg: "100%", md:"100%",sm:"100%", xs: "180px" },
                          height: { lg: "176px",md: "176px",sm:"176px", xs: "120px" },
                          position:"relative"

                        }}
                        >
                        <img src={card.imageUrl} height="176" style={{width:"100%", objectFit:"cover"}}
                        alt={card.title} />
                        </Box>
                      
                    </Card>
                  </Link>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          {(dir === "ltr" && currentIndex != 0 ) || (dir === "rtl" &&  currentIndex != stories.length - itemsPerPage) ?(
            <IconButton
              disableRipple
              onClick={handlePrevious}
             // disabled={currentIndex === 0}
              sx={{
                position: "absolute",
                top: "50%",
                left: "-20px",
                transform: "translateY(-50%)",
                height: "40px",
                width: "40px",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                color: "#44b50c",
                boxShadow: "0 0 8px 2px rgba(0,0,0,.1)",
                cursor: "pointer",
                "&:hover": {
                  background: "#fff",
                },
              }}
            >
              <ArrowBackIosIcon sx={{ width: "15px", height: "15px" }} />
            </IconButton>
          ) : null}
          {(dir === "ltr" && (currentIndex != stories.length - itemsPerPage)) ||  (dir === "rtl" && currentIndex !== 0) ? (
            <IconButton
              disableRipple
              onClick={handleNext}
              disabled={currentIndex >= stories.length - itemsPerPage}
              sx={{
                boxShadow: "0 0 8px 2px rgba(0,0,0,.1)",
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                zIndex: "100",
                right: "-18px",
                height: "40px",
                width: "40px",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                color: "#44b50c",
                "&:hover": {
                  background: "#fff",
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ width: "15px", height: "15px" }} />
            </IconButton>
          ): null}
        </Hidden>
      </Box>
    </Container>
  );
};

export default HotelsInCity;
