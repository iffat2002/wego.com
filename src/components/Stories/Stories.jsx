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
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const stories = [
  {
    id: 1,
    title:
      "Let’s Celebrate! Create Your Most Cherished Memories in Bahrain this December",
    imageUrl: "https://blog.wego.com/wp-content/uploads/featured-480x356.png",
  },
  {
    id: 2,
    title:"Your Ultimate Guide to Solo Travel in Europe: Tips, Destinations, and Itinerary",
    imageUrl: "https://blog.wego.com/wp-content/uploads/solo-travel-europe-featured-480x320.webp",
  },
  {
    id: 3,
    title:"Your Ultimate Guide to Solo Travel in Thailand: Tips, Destinations, and Itinerary",
    imageUrl:
      "https://blog.wego.com/wp-content/uploads/shutterstock_2278573153-480x249.jpg",
  },
  {
    id: 4,
    title:
      "Let’s Celebrate! Create Your Most Cherished Memories in Bahrain this December",
    imageUrl: "https://blog.wego.com/wp-content/uploads/featured-480x356.png",
  },
  {
    id: 5,
    title:"Your Ultimate Guide to Solo Travel in Europe: Tips, Destinations, and Itinerary",
    imageUrl: "https://blog.wego.com/wp-content/uploads/solo-travel-europe-featured-480x320.webp",
  },
  {
    id: 6,
    title:"Your Ultimate Guide to Solo Travel in Thailand: Tips, Destinations, and Itinerary",
    imageUrl:
      "https://blog.wego.com/wp-content/uploads/shutterstock_2278573153-480x249.jpg",
  },
];

const Stories = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const cardWidth = 368;
  const handleNext = () => {
    if (currentIndex < stories.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container sx={{ mb: 4, padding:0 }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 2, padding:"0px 16px" }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: {lg:"24px",md:"24px",sm:"24px", xs:"20px"}, fontWeight: "500", color: "black" }}
        >
          Stories
        </Typography>
        <Hidden smDown>
        <Link
          href="https://blog.wego.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none" }}
        >
          {" "}
          <Typography
            variant="p1"
            sx={{
              fontWeight: "400",
              fontSize: "17px",
              color: "#44b50c",
              lineHeight: "24px",
            }}
          >
            See all stories
          </Typography>
          <IconButton
            disableRipple
            edge="end"
            sx={{
              marginLeft: "2px",
              width: "8px",
              height: "8px",
            }}
          >
            <KeyboardArrowRightIcon
              sx={{
                color: "#44b50c",
              }}
            />
          </IconButton>
        </Link>
        </Hidden>
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
                transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`,
                transition: "transform 0.5s ease-in-out",
                width: `${stories.length * (cardWidth + 16) + 16}px`,
                overflowX: { lg: "visible",md: "visible",sm:"visible" , xs: "scroll" },
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                paddingRight: "26px", // Add padding to prevent cropping
              }}
            >
              {stories.map((card) => (
                <Box
                  key={card.id}
                  sx={{
                    flex: { lg: `0 0 ${cardWidth}px`,md: `0 0 ${cardWidth}px`,sm:`0 0 ${cardWidth}px`, xs: "none" },
                    padding: {lg: "8px", md:"8px",sm:"8px", xs: "0px 0px 8px 14px"},
                    boxSizing:"content-box",
                    width:{xs:"180px"}
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
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: { lg: "100%", md:"100%",sm:"100%", xs: "180px" },
                          height: { lg: "216px",md: "216px",sm:"216px", xs: "120px" },

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
                            fontSize: "17px",
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
                        <Stack
                          direction="row"
                          sx={{
                          padding:{lg:0, md:0, sm:0, xs:"8px 0px"},
                            flexGrow:1,
                            fontSize: "13px",
                            color: "#767676",
                            fontWeight: "400",
                            alignItems: "flex-end",
                            gap: "8px",
                          }}
                        >
                          <img
                            alt="wego"
                            width="16px"
                            height="16px"
                            src="https://assets.wego.com/image/upload/c_fit,w_48,h_48,q_auto,f_auto,fl_lossy/v1456382855/wego_logos/wego-icon.png"
                          />
                          Wego Travel Blog
                        </Stack>
                      </CardContent>
                    </Card>
                  </Link>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          {currentIndex != 0 && (
            <IconButton
              disableRipple
              onClick={handlePrevious}
              disabled={currentIndex === 0}
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
          )}
          {currentIndex != stories.length - itemsPerPage && (
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
          )}
        </Hidden>
      </Box>
    </Container>
  );
};

export default Stories;
