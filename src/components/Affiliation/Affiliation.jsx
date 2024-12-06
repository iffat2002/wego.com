import React from "react";
import {
  Box,

  Stack,
  Typography,

  Container,
 
  Link,

  Hidden,
} from "@mui/material";

const airlines = [
  {
    id: 1,
    imageUrl: "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
    linkUrl:
      "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
  },
  {
    id: 2,
    imageUrl: "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
    linkUrl:
      "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
  },
  {
    id: 3,
    imageUrl: "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
    linkUrl:
      "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
  },
  {
    id: 4,
    imageUrl: "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
    linkUrl:
      "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
  },
  {
    id: 5,
    imageUrl: "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
    linkUrl:
      "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
  },
  {
    id: 6,
    imageUrl: "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
    linkUrl:
      "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
  },
  {
    id: 7,
    imageUrl: "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
    linkUrl:
      "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
  },{
    id: 8,
    imageUrl: "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
    linkUrl:
      "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20241206/flights/airlines_rectangular/PK.png",
  }
];

const travelPartners = [
    {
        id:1,
        imageUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png",
        linkUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png"
    },
    {
        id:2,
        imageUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png",
        linkUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png"
    }, {
        id:3,
        imageUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png",
        linkUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png"
    }, {
        id:4,
        imageUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png",
        linkUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png"
    }, {
        id:5,
        imageUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png",
        linkUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png"
    }, {
        id:6,
        imageUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png",
        linkUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png"
    }, {
        id:7,
        imageUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png",
        linkUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png"
    },
    {
        id:8,
        imageUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png",
        linkUrl:"https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20220803/providers/rectangular_logos/odigeo.com.png"
    },
]
const Affiliation = () => {
  return (
    <Container sx={{ pb: 4,  }}>
      <Box sx={{padding:1}}>
        <Stack direction="row" alignItems="center">
          <Box sx={{ flexShrink: "0", width:{lg:"25%", md:"35%",sm:"35%"}  }}>
            <Typography
              variant="h4"
              sx={{
                color: "#1d1d1d",
                lineHeight: "30px",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Popular Airlines in Pakistan
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: 1,
                color: "#1d1d1d",
                lineHeight: "24px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Book cheap flights on your favourite airlines
            </Typography>
          </Box>
          <Stack direction="row"
            sx={{ flexWrap: "wrap", gap: "16px 0", width: "100%" }}
          >
            {airlines.map((item)=>(

                    <Link key={item.id} href={item.linkUrl} target="_blank" sx={{display:"flex",flexGrow:"1", height:"32px", justifyContent:"center", width:"25%"}}>
                    <img src={item.imageUrl} height="100%"></img>
                    </Link>
                   
            ))}
          </Stack>
        </Stack>
      </Box>
      <Box sx={{mt:4, padding:1}}>
        <Stack direction="row" alignItems="center">
          <Box  sx={{ flexShrink: "0", width:{lg:"25%", md:"35%",sm:"35%"}}} >
            <Typography
              variant="h4"
              sx={{
                color: "#1d1d1d",
                lineHeight: "30px",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Our Travel Partners
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: 1,
                color: "#1d1d1d",
                lineHeight: "24px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Wego searches for the best deals on these sites in Pakistan
            </Typography>
          </Box>
          <Stack direction="row"
            sx={{ flexWrap: "wrap", gap: "16px 0", width: "100%" }}
          >
            {travelPartners.map((item)=>(

                    <Link key={item.id} href={item.linkUrl} target="_blank" sx={{display:"flex",flexGrow:"1", height:"32px", justifyContent:"center", width:"25%"}}>
                    <img src={item.imageUrl} height="100%"></img>
                    </Link>
                   
            ))}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Affiliation;
