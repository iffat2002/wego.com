import * as React from "react";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from "react-i18next";
import { Box, Link, Stack, Container, Hidden, Typography } from "@mui/material";
import FlightsTab from "./FlightsTab";
import HotelsTab from "./HotelsTab";

  
function CustomTabPanel(props) {
  const dir = document.documentElement.dir;
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            backgroundColor: "white",
            borderRadius: dir === "ltr" ? "0 8px 8px 8px" : "8px 0px 8px 8px",
            boxShadow: "0 0 24px 2px rgba(0,0,0,.2)",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// hero section content tabs
export default function HeroTabs( ) {
  const router = useRouter();
  const dir = document.documentElement.dir;
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname.includes("/hotels")) return 1;
      if (window.location.pathname.includes("/flights")) return 0;
    }
    return 0;
  });



  const handleChange = (event, newValue) => {
    
    console.log("new val", newValue)
  };

  const handleRoute = (tab) => {
    if (tab === "flights" ) {
    
      router.replace('/flights' , undefined, { scroll: false });
      
    } else if (tab === "hotels") {
   
    router.replace('/hotels' , undefined, { scroll: false });
      
    }
   
  };



  return (
    <Container
      sx={{
        minHeight: {lg:"300px",md:"300px",sm:"300px",xl:"300px", xs:"auto"},
        borderRadius: "18px",
        overflow: "visible",
        margin: "auto",
     
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          zIndex: "4",
          margin: "auto",
          overflow: "visible",
          padding: {lg:"0px 8px", sm: '0px'}
        }}
      >
       <Hidden smUp>
          <Stack direction="column" width="100%">
            <Stack direction="row">
              <Stack
             onClick={()=> {router.push('/flights')}} 
                direction="column"
                sx={{
                  width: "50%",
                  height: "104px",
                  padding: "0 1rem",
                  background: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "1rem",
                  margin: "0 4px",
                  boxShadow: "0 2px 4px 1px rgba(39,36,44,.12)",

                }}
              >
                <img
                  src="https://zen.wego.com/cdn-cgi/image/width=144,height=144/web/icons/flights.png"
                  alt="icon"
                  width="48px"
                  height="48px"
                ></img>

                <Typography variant="body1"  color="initial" paddingTop="10px">
                  Flights
                </Typography>
              </Stack>
              
              <Stack
                direction="column"
                sx={{
                  width: "50%",
                  height: "104px",
                  padding: "0 1rem",
                  background: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "1rem",
                  margin: "0 4px",
                  boxShadow: "0 2px 4px 1px rgba(39,36,44,.12)",
                }}
                onClick={()=> {router.push('/hotels')}}
              >
                <img
                  src="https://zen.wego.com/cdn-cgi/image/width=144,height=144/web/icons/hotels.png"
                  alt="icon"
                  width="48px"
                  height="48px"
                ></img>

                <Typography variant="body1" color="initial"  paddingTop="10px">
                  Hotels
                </Typography>
              </Stack>
            </Stack>
            <Box width="100%" height="48px" sx={{borderRadius:"8px",padding:"0 12px", boxShadow:"0 2px 4px 2px #f4f2f7", margin:"32px 0px", position:"relative", background:"#fff"}}>
            <Link href="/target"  sx={{fontSize:"12px",textDecoration:"none", }}>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        color: "white",
                        cursor: "pointer",
                        width:"100%",
                        height:"100%",
                        color:"black",
                        gap:"4px"


                      }}
                    >
                      <Box
                        sx={{
                          backgroundImage: "url(/fly.png)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "30px",
                          height: "30px",
                          backgroundRepeat: "no-repeat",
                          marginRight:dir === "ltr" && 1,
                        }}
                      ></Box>
                      <strong style={{ marginRight: dir === "ltr" && "4px", ml: dir === "rtl" && "4px"  }}>WegoPro </strong>{" "}
                   <span>  Business Travel</span>
                      <Box
                        sx={{
                          width: "2.5rem",
                          background: "#ff9800",
                          top: "-10px",
                          zIndex: "10",
                          position: "absolute",
                          fontSize: "12px",
                          borderRadius: "4px",
                          color: "white",
                          fontWeight: "500",
                          textAlign:"center"
                        }}
                      >
                        New
                      </Box>
                    </Stack>
                
              </Link>
              </Box>
          </Stack>
        </Hidden>
        <Hidden smDown>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              maxWidth: "900px",
              borderRadius: "8px 8px 0 0",
              overflow: "visible",
              borderBottom: "0px",
              color: "white",
              display: "flex",
              fontSize: "15px",
              textDecoration: "none",
              "& .MuiButtonBase-root": {
                opacity: 1,
                width: "auto",
              },
              "& .MuiTab-root": {
                color: "white",
                height: "56px",
                textTransform: "none !important",
                lineHeight: "1.6",
                fontSize: "15px",
                fontWeight: "400",
                overflow: "visible !important",
              },

              "& .Mui-selected": {
                color: "#1d1d1d !important",
                background: "#fff",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .MuiTabs-scroller": { overflow: "visible !important" },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-scroller": { overflow: "visible" },
                flexWrap: "wrap",
                overflow: "visible",
                "& .MuiTabs-flexContainer": {
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                },
              }}
            >
                
              <Tab
                disableRipple
                label={
                  <Stack
                    sx={{
                      padding: "0 1rem",
                      flexDirection: { lg: "row", sm: "column", md:"row", sm:"row" },
                    }}
                    onClick={()=>handleRoute("flights")}
                  >
                    <Box
                      sx={{
                        backgroundImage: "url(/icons.webp)",
                        width: "24px",
                        height: "24px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "99px 149px",
                        backgroundPosition:
                          value == 0 ? "-75px -50px" : "0px -75px",
                        marginRight: dir === "ltr" ?  1 : 0,
                        marginLeft: dir === "ltr" ?  0 : 1,
                   
                       
                      }}
                    ></Box>
                     {t("flights")}
                  </Stack>
                }
                sx={{
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(0, 0, 0, .24)",
                  borderRadius: dir === "ltr" ?  "8px 0 0 0" : "0px 8px 0 0",
                  //width:{lg:"auto" , sm:"50% !important"}
                }}
                {...a11yProps(0)}
              />

              <Tab
                disableRipple
                onClick={()=>handleRoute("hotels")}
                label={
                  <Stack direction="row" sx={{ padding: "0 1rem" }}>
                    <Box
                      sx={{
                        backgroundImage: "url(/icons.webp)",
                        width: "24px",
                        height: "24px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "99px 149px",
                        backgroundPosition:
                          value == 1 ? "-75px -75px" : "0px -100px",
                          marginRight: dir === "ltr" ?  1 : 0,
                          marginLeft: dir === "ltr" ?  0 : 1,
                      }}
                    ></Box>
                    {t("hotels")}
                  </Stack>
                }
                sx={{
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(0, 0, 0, .24)",
                  marginRight: dir === "ltr" ?  "4px" : 0,
                  marginLeft: dir === "ltr" ?  "0" : "4px",
                  borderRadius: dir === "ltr" ? "0px 8px 0 0" :"8px 0 0 0" ,
                }}
                {...a11yProps(1)}
              />

              <Link href="/target">
                <Tab
                  disableRipple
                  label={
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        color: "white",
                        cursor: "pointer",
                        gap:"4px"
                      }}
                    >
                      <Box
                        sx={{
                          backgroundImage: "url(/fly.png)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "30px",
                          height: "30px",
                          backgroundRepeat: "no-repeat",
                          marginRight: dir === "ltr" ?  1 : 0,
                        
                        }}
                      ></Box>
                      <strong >WegoPro </strong>{" "}
                      Business Travel
                      <Box
                        sx={{
                          width: "2.5rem",
                          background: "#ff8000",
                          top: "-10px",
                          zIndex: "10",
                          position: "absolute",
                          fontSize: "12px",
                          borderRadius: "4px",
                          color: "white",
                          fontWeight: "600",
                        }}
                      >
                        NEW
                      </Box>
                    </Stack>
                  }
                  sx={{
                    backdropFilter: "blur(8px)",
                    backgroundColor: "rgba(0, 0, 0, .24)",
                    borderRadius: "8px 8px 0 0",
                    overflow: "visible",
                    "& .MuiTab-root": {
                      padding: 0,
                    },
                  }}
                  {...a11yProps(2)}
                />
              </Link>
            </Tabs>
          </Box></Hidden>
   
        <Hidden smDown>
          {/* first tab flights content */}
          <CustomTabPanel value={value} index={0} className="tab">
            <FlightsTab />
          </CustomTabPanel>

          {/* second tab hotels content */}
          <CustomTabPanel value={value} index={1}>
            Where do you want to stay?
            <HotelsTab />
          </CustomTabPanel>
        </Hidden>
      </Box>
    </Container>
  );
}
