import React, { useState } from "react";
import {
  Box,
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
  Hidden
} from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const cardData = [
  {
    id: 1,
    imageUrl:
      "https://zen.wego.com/marketing/carousel/IHG%20Hotel_331916379.jpg",
  },
  {
    id: 2,
    imageUrl: "https://zen.wego.com/marketing/carousel/Esim_327346649.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://zen.wego.com/marketing/carousel/Booking.com%20C2%20copy_331916478.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://zen.wego.com/marketing/carousel/Airport%20Transfer_327346552.jpg",
  },
  {
    id: 5,
    imageUrl:
      "https://zen.wego.com/marketing/carousel/Web_Banner%201104x552_310747957.jpg", // Replace with actual image URL
  },
];
const features = [
  {id: 1,
  img: "https://zen.wego.com/web/illustrations/look-no-further.png",
  title:"Top travel app in Pakistan",
  subtitle: "Highly rated in App Store & Google Play"
  },
   {id: 2,
  img: "https://zen.wego.com/web/illustrations/shop-with-confidence.png",
  title:"Shop with confidence",
  subtitle: "No hidden fees, taxes or other nasty surprises"
  },
  {id: 3,
    img: "https://zen.wego.com/web/illustrations/pay-the-way-you-want.png",
    title:"Pay the way you want",
    subtitle: "See only sellers who support your preferred methods"
    },
    {id: 4,
      img: "https://zen.wego.com/web/illustrations/instant-booking.png",
      title:"Instant booking",
      subtitle: "For selected sellers, book with just a couple of clicks"
      },
]

const DealsAndHighlights = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const cardWidth = 368;

  const handleNext = () => {
    if (currentIndex < cardData.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container sx={{marginTop: {lg:7, xs:0, sm:7},marginBottom:4, }} >
      <Box sx={{position:"relative"}}>
      <Grid
        item
        xs={9}
        sx={{ position: "relative",padding:{lg:1,sm:1, xs:0},  overflow:"hidden" }}
      >
        <Grid
          container
          spacing={2}
          sx={{
           // overflow: "hidden",
            display: "flex",
             margin:"auto"
          }}
        >
          <Grid
            sx={{
                display: "flex", 
                justifyContent: "flex-start", 
               // margin: "auto",
                gap:{lg:"16px",md:"16px", xs:"8px"},
                transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`, 
                transition: "transform 0.5s ease-in-out",
                width: `${cardData.length * (cardWidth + 16) + 16}px`, 
                overflowX:{lg:"visible",sm:"visible", md:"visible", xs:"scroll"},
                scrollbarWidth: "none", 
    "&::-webkit-scrollbar": {
      display: "none",
    },
              
            }}
          >
            {cardData.map((card) => (
              <Box
                key={card.id}
                sx={{
                    flex: {lg:`0 0 ${cardWidth}px`,md:`0 0 ${cardWidth}px`,sm:`0 0 ${cardWidth}px`, xs: "0 0 auto"}, // Set each card's width to 368px
                  
                  }}
              >
                <Card
                  sx={{
                    borderRadius:{lg: "8px",sm:"8px", xs:"0px", md:"8px"},
                    height: "100%",
                   
                  }}
                >
                  <Link href={card.imageUrl} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    sx={{
                      width: {lg:"100%",md:"100%", sm:"100%", xs: "244px"},
                      height: {lg:"183px",md:"183px",sm:"183px", xs:"122px"},
                   
                    }}
                  
                    image={card.imageUrl}
                    alt="slider"
                  />
                  </Link>
                </Card>
              </Box>
            ))}
 
          </Grid>
          
        </Grid>

      </Grid>
      <Hidden smDown>
      {currentIndex !=0 && 
        <IconButton disableRipple
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-20px",
            transform: "translateY(-50%)",
            height:"40px",
            width:"40px",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            color: "#44b50c",
            boxShadow: '0 0 8px 2px rgba(0,0,0,.1)',
            cursor: 'pointer',
            "&:hover":{
              background:"#fff"
            }
          }}
        >
          <ArrowBackIosIcon sx={{width:"15px", height:"15px"}} />
        </IconButton>
}
{currentIndex != cardData.length - itemsPerPage  &&
        <IconButton disableRipple
          onClick={handleNext}
          disabled={currentIndex >= cardData.length - itemsPerPage}
          sx={{
            boxShadow: '0 0 8px 2px rgba(0,0,0,.1)',
            cursor: 'pointer',
            position: "absolute",
            top: "50%",
            zIndex:"100",
            right: "-18px",
            height:"40px",
            width:"40px",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            color: "#44b50c",
            "&:hover":{
              background:"#fff"
            }
          }}
        >
          <ArrowForwardIosIcon  sx={{width:"15px", height:"15px"}}/>
        </IconButton>
}
</Hidden>
</Box>
<Stack direction="row" sx={{justifyContent:"space-between", marginTop:5, marginBottom:5, flexWrap:"wrap", gap:"16px 0px"}}>
{features.map((item) => (
  <Stack direction="column" sx={{width:{lg:"272px", xs:"165px"}, alignItems:"center",  }} key={item.id}>
    <img src={item.img} alt={item.title} width="100px" height="100px">
    </img>
    <Typography variant="h6" sx={{fontSize: {lg:"17px", xs:"14px"},    fontWeight: {lg:"600", xs:"500"},
    lineHeight: "24px",
    marginTop: "8px",
    minHeight: "24px",textAlign:"center"}}>{item.title}</Typography>
      <Typography variant="body1" sx={{fontSize: {lg:"17px", xs:"14px"},     fontWeight: "400",
    lineHeight: "24px",
    marginTop: "4px",
    color:"#767676",
    minHeight: "24px",textAlign:"center"}}>{item.subtitle}</Typography>
    </Stack>
))}

</Stack>
    </Container>
  );
};

export default DealsAndHighlights;
