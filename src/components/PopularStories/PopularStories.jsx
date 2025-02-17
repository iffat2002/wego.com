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
      "Avari Towers Karachi",
      rating:4,
      points:"7.8",
    imageUrl: "https://assets.wego.com/image/upload/h_184,c_fill,f_auto,fl_lossy,q_auto:low,g_auto/v1639463186/web/misc/hotel-image-placeholder.png",
  },
  {
    id: 2,
    title:"Hotel Excelsior Karachi",
    rating:5,
    points:"6.5",
    imageUrl: "https://blog.wego.com/wp-content/uploads/solo-travel-europe-featured-480x320.webp",
  },
  {
    id: 3,
    title:"Perl Continental Karachi",
    rating:5,
    points:"7.2",
    imageUrl:
      "https://blog.wego.com/wp-content/uploads/shutterstock_2278573153-480x249.jpg",
  },
  {
    id: 4,
    title:
      "Karachi Marriott Hotel",
      points:"8.0",
      rating:4,
    imageUrl: "https://blog.wego.com/wp-content/uploads/featured-480x356.png",
  },
  {
    id: 5,
    title:"Your Ultimate Guide to Solo Travel in Europe: Tips, Destinations, and Itinerary",
    rating:4,
    points:"7.8",
    imageUrl: "https://blog.wego.com/wp-content/uploads/solo-travel-europe-featured-480x320.webp",
  },
  {
    id: 6,
    title:"Your Ultimate Guide to Solo Travel in Thailand: Tips, Destinations, and Itinerary",
    rating:4,
    points:"4.8",
    imageUrl:
      "https://blog.wego.com/wp-content/uploads/shutterstock_2278573153-480x249.jpg",
  },
];

const PopularStories = () => {
  const dir = document.documentElement.dir;
        // Determine the background color based on the rating
        const getBackgroundColor = (rating) => {
          if (rating > 7.5) return '#7cb342';  // green
          if (rating > 6.5) return '#ffa726';  // orange
          return '#f06748';  // red
        };
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const cardWidth = 272;
  const handleNext = () => {
    if (dir === "rtl") {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1); // Move left in RTL
      }
    } else{
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
    <Container sx={{ mt:{lg:"48px", xs:"5px", sm:"48px", md:"48px"}, padding:0 }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 1, px:{lg:"8px", md:"8px", sm:"8px", xs:"16px"} }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: {lg:"24px",md:"24px",sm:"24px", xs:"20px"}, fontWeight: "500", color: "black",}}
        >
          Popular Hotels in Karachi
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
            px: dir === "rtl" && 2
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
                    width:{xs:"206px"},
                    height:{xs:"257px",lg:"auto", md:"auto", sm:"auto"},
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
                        pb:0
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: { lg: "100%", md:"100%",sm:"100%", xs: "206px" },
                          height: { lg: "184px",md: "184px",sm:"184px", xs: "120px" },

                        }}
                        image={card.imageUrl}
                        alt={card.title}
                      />
                      <CardContent
                     sx={{height: "calc(100% - 245px)", display:"flex",flexDirection:"column", paddingBottom:"16px !important"}}
                      >
                        <Typography
                          variant="body1"
                          //component="div"
                          sx={{
                            fontSize: {lg:"17px", md: "17px", sm:"17px", xs:"15px"},
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            WebkitLineClamp: "4",
                            textTransform: "none",
                            fontWeight: {lg:"600",sm:"500", xs:"500"},
                            textOverflow: "ellipsis",
                            flexShrink: 0,
                            // width:"100%"
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Rating value={card.rating} sx={{".MuiRating-iconEmpty":{display:"none"}, fontSize:"1rem", py:"4px"}} readOnly />
                        <Stack
                          direction="row"
                          sx={{
                        
                            alignItems:"center",
                            fontSize: "12px",
                            color: "#767676",
                            fontWeight: "400",
                          py:1,
                            gap: "8px",
                          }}
                        >
                         <Box sx={{alignItems: "center",
    borderRadius: "14px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    fontWeight: "600",
    height: "24px",
    backgroundColor: getBackgroundColor(card.points),
    padding: "0 8px"}}>{card.points}</Box>
                          11572 reviews
                        </Stack>
                        <Typography sx={{     bottom: "0px", 
    position: {lg:"absolute", md:"absolute",sm:"absolute",xs:"relative"},
    paddingBottom: "16px", color:"#44b50c", fontWeight:"600", fontSize:{lg:"18px", md:"18px", sm:"18px", xs:"14px"}, display:{lg:"block",md:"block", sm:"block", xs:"flex" }, justifyContent:"right"}}>Get Rates</Typography>
                      </CardContent>
                
                      
                    </Card>
                  </Link>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          {(dir === "ltr" && currentIndex != 0 ) || (dir === "rtl" &&  currentIndex != stories.length - itemsPerPage) ? (
            <IconButton
              disableRipple
              onClick={handlePrevious}
              //disabled={currentIndex === 0}
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
          ): null}
          {(dir === "ltr" && (currentIndex != stories.length - itemsPerPage)) ||  (dir === "rtl" && currentIndex !== 0) ? (
            <IconButton
              disableRipple
              onClick={handleNext}
             // disabled={currentIndex >= stories.length - itemsPerPage}
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

export default PopularStories;
