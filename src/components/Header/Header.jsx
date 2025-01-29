import { React, useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import CurrencyFlag from "react-currency-flags";
import Button from "@mui/material/Button";

import { useTranslation } from "react-i18next";
import { useTheme, styled } from "@mui/material/styles";
import {
  Stack,
  Container,
  Typography,
  Box,
  Divider,
  Hidden,
  Link,
  Menu,
MenuItem,
  IconButton,
  Popper,
  Paper,
  Drawer,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CountryCurrencyFlags from "./CountryCurrencyFlags";
import CurrencyMenu from "./CurrencyMenu";
import MenuIcon from "@mui/icons-material/Menu";
import LanguagesMenu from "./LanguagesMenu";
const Header = ({scroll, tab, setTab}) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
setTab(true)

//More menu
const [anchorMoreEl, setAnchorMoreEl] = useState(null);
const openMore = Boolean(anchorMoreEl);
const handleMoreClick = (event) => {
  setAnchorMoreEl(event.currentTarget);
};
const handleMoreClose = () => {
  setAnchorMoreEl(null);
};




////

  //mobile toggle drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerItems = [
    { img: "/flight.svg", title: "Search Flights" },
    { img: "/hotels.svg", title: "Search Hotels" },
    {
      img: "wegopro.svg",
      title: "Business Travel",
      subtitle: "WegoPro",
      tag: "New",
    },
  ];
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Arrow styling
  const Arrow = styled("div")(({ theme, left }) => ({
    position: "absolute",
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: `10px solid ${theme.palette.background.paper}`,
    top: "-5px",
    left: left || "44%",
    transform: "translateX(-50%)",
  }));

  // State for poppers
  const [openCountryPopper, setOpenCountryPopper] = useState(false);
  const [openCurrencyPopper, setOpenCurrencyPopper] = useState(false);
  const [openLanPopper, setOpenLanPopper] = useState(false);
  const [anchorElCountry, setAnchorElCountry] = useState(null);
  const [anchorElCurrency, setAnchorElCurrency] = useState(null);
  const [anchorElLan, setAnchorElLan] = useState(null);
  const [selectedFlag, setSelectedFlag] = useState("PKR");
  const [selectedCurrency, setSelectedcurrency] = useState(selectedFlag);
  const handleCountryClick = (event) => {
    setAnchorElCountry(event.currentTarget);
    setOpenCountryPopper((prev) => !prev);
    setOpenCurrencyPopper(false); // Close the currency popper
    setOpenLanPopper(false);
  };

  const handleCurrencyClick = (event) => {
    setAnchorElCurrency(event.currentTarget);
    setOpenCurrencyPopper((prev) => !prev);
    setOpenCountryPopper(false); // Close the country popper
    setOpenLanPopper(false);
  };

  const handleLanClick = (event) => {
    setAnchorElLan(event.currentTarget);
    setOpenLanPopper((prev) => !prev);

    setOpenCountryPopper(false);
    setOpenCurrencyPopper(false);
  };
  const canBeOpenCountry = openCountryPopper && Boolean(anchorElCountry);
  const canBeOpenCurrency = openCurrencyPopper && Boolean(anchorElCurrency);
  const canBeOpenLan = openLanPopper && Boolean(anchorElLan);
  const countryId = canBeOpenCountry ? "country-popper" : undefined;
  const currencyId = canBeOpenCurrency ? "currency-popper" : undefined;
  const lanId = canBeOpenLan ? "language-popper" : undefined;
  const [lan, setLan] = useState("EN");

  const handleChildStateChange = (newState) => {
    console.log("change", newState);
    setSelectedFlag(newState.currencyCode);
    setLan(newState.lan.toUpperCase());
    i18n.changeLanguage(newState.lan.toUpperCase());
  };
  const updateLang = (selected) => {
    setLan(selected);
    try {
      i18n.changeLanguage(selected); // Centralized language update
    } catch (error) {
      console.error("Error changing language:", error); // Centralized error handling
    }
  };

  const handleCurrencyChange = (newState) => {
    setSelectedcurrency(newState);
  };
  useEffect(() => {
    setSelectedcurrency(selectedFlag);
  }, [selectedFlag]);

 
  return (
    <>
    <Hidden mdDown>
      <Box
        height="72px"
        sx={{ width:"100%", position:"fixed", zIndex:3, backgroundColor: scroll ? "white" : "transparent", boxShadow: scroll ? "0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2)" : "none"
          }}
      > 
        <Container sx={{display:"flex",justifyContent:"space-between", flexDirection:"row", height:"100%", }}>
        <Box height="100%" sx={{display:  "flex"  ,alignItems: "center", gap:"0 40px", }}>
          <Link
            href="/"
            sx={{
              backgroundImage: "url('/logo.webp')",
              backgroundPosition: scroll ? "0 0" : "0 -41px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100px 81px",
              height: "40px",
              width: "100px",
            }}
          ></Link>
          
          {scroll &&
          <Stack direction="row" sx={{gap:"0 2rem", whiteSpace:"no-wrap", height:"100%"}}>
            <Link sx={{display:"flex", alignItems:"center", fontSize:"15px",color:"#1d1d1d", fontWeight:"600", height:"100%", lineHeight:"1.6", position:"relative", textDecoration:"none"}} href="/flights">Flights</Link>
            <Link sx={{display:"flex", alignItems:"center", fontSize:"15px",color:"#1d1d1d", fontWeight:"600", height:"100%", lineHeight:"1.6", position:"relative", textDecoration:"none"}} href="/flights">Hotels</Link>
            <Stack direction="row" onClick={handleMoreClick} sx={{gap:"12px", fontWeight:"600", alignItems:"center", fontSize:"15px", cursor:"pointer", marginRight:"0.5rem"}}>More
            <ArrowDropDownIcon
                  sx={{
                    width: "28px",
                    height: "28px",
                    color:"#767676",
                    transform: openMore
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
            </Stack>
            <Menu
            disableAutoFocusItem
        id="basic-menu"
        anchorEl={anchorMoreEl}
        open={openMore}
        onClose={handleMoreClose}
       sx={{".MuiPaper-root":{borderRadius:"0px !important"}}}
      >
        <MenuItem disableRipple onClick={handleMoreClose} sx={{fontWeight:"400", fontSize:"15px", height:"56px"}}><Typography sx={{fontWeight:"600", fontSize:"15px", mr:"4px"}}>WegoPro</Typography>Business Travel</MenuItem>
        <MenuItem disableRipple onClick={handleMoreClose} sx={{fontWeight:"400", fontSize:"15px", height:"56px"}}>Travel Blog</MenuItem>
        
  
      </Menu>
          </Stack>
}

        </Box>
        
        <Stack direction="row" alignItems="center">
          <Stack direction="row" sx={{gap: scroll ? "0px" :"1px"}}>
            <Button
              variant="contained"
              disableRipple
              startIcon={
                <CurrencyFlag currency={selectedFlag} width="18" height="12" />
              }
              endIcon={
                <ArrowDropDownIcon
                  sx={{
                    width: "28px",
                    height: "28px",
                    transform: openCountryPopper
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              }
              sx={{
                backgroundColor: scroll ? "white" : theme.palette.customTransparent.gray,
                color: scroll ? "#767676" :"white",
                border: scroll ? "1px solid #dfdfdf" :"none",
                borderRadius: "100px 0 0 100px",    
                height: "32px",
                width: "75px",
                borderWidth: "1px 0 1px 1px",
                padding: "0px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "normal",
                "& .MuiButton-icon": {
                  marginLeft: "0px !important",
                  marginRight: "5px !important",
                },
                "&:hover":{
                  backgroundColor: scroll ? "#f4f4f4" : "rgba(29, 29, 29, .8)"
                }
              }}
              aria-describedby={countryId}
              onClick={handleCountryClick}
            ></Button>
            <Popper
              onClick={() => setOpenCountryPopper(false)}
              id={countryId}
              sx={{
                width: "778px",
                height: "512px",
                boxShadow: "0 0 24px 2px rgba(0,0,0,.08)",
                right: "0px",
                zIndex: "10",
              }}
              open={openCountryPopper}
              anchorEl={anchorElCountry}
              transition
              modifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [50, 10],
                  },
                },
              ]}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "24px 0px 30px 24px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    <Arrow className="arrow" left="44%" />
                    <Typography
                      variant="h7"
                      sx={{
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "#1d1d1d",
                        marginBottom: "10px",
                      }}
                    >
                      Country/Region
                    </Typography>
                    <CountryCurrencyFlags
                      onStateChange={handleChildStateChange}
                      flag={selectedFlag}
                    />
                  </Paper>
                </Fade>
              )}
            </Popper>

            <Button
              variant="contained"
              disableRipple
              aria-describedby={lanId}
              onClick={handleLanClick}
              startIcon={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "15px !important" }}
                >
                  {lan}
                </Typography>
              }
              endIcon={
                <ArrowDropDownIcon
                  sx={{
                    width: "28px",
                    height: "28px",
                    color: scroll ? "#767676" : "white",
                    transform: openLanPopper
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              }
              sx={{
                backgroundColor: scroll ? "white" : theme.palette.customTransparent.gray,
                color: scroll ? "#1d1d1d" :"white",
                border: scroll ? "1px solid #dfdfdf" :"none",
            
                height: "32px",
                width: "78px",
                padding: "0px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "normal",
                "& .MuiButton-icon": {
                  marginLeft: "0px !important",
                  marginRight: "5px !important",
                },
                "&:hover":{
                  backgroundColor: scroll ? "#f4f4f4" : "rgba(29, 29, 29, .8)"
                }
              }}
            ></Button>
            <Popper
              onClick={() => setOpenLanPopper(false)}
              id={lanId}
              sx={{
                width: "588px",
                zIndex: "10",
                boxShadow: "0 0 24px 2px rgba(0,0,0,.08)",
              }}
              open={openLanPopper}
              anchorEl={anchorElLan}
              transition
              modifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [70, 10],
                  },
                },
              ]}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "24px 0px 0px 24px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    <Arrow className="arrow" left="39%" />
                    <Typography
                      variant="h7"
                      sx={{
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "#1d1d1d",
                        marginBottom: "10px",
                      }}
                    >
                      Language
                    </Typography>
                    <LanguagesMenu onStateChange={updateLang} lang={lan} />
                  </Paper>
                </Fade>
              )}
            </Popper>
            <Button
              variant="contained"
              disableRipple
              onClick={handleCurrencyClick}
              aria-describedby={currencyId}
              startIcon={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "15px !important" }}
                >
                  {selectedCurrency}
                </Typography>
              }
              endIcon={
                <ArrowDropDownIcon
                  sx={{
                    width: "28px",
                    height: "28px",
                    color: scroll ? "#767676" : "white",
                    transform: openCurrencyPopper
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              }
              sx={{
                backgroundColor: scroll ? "white" : theme.palette.customTransparent.gray,
                color: scroll ? "#1d1d1d" :"white",
                border: scroll ? "1px solid #dfdfdf" :"none",
                height: "32px",
                padding: "0px 16px",
                display: "flex",
                alignItems: "center",
                borderRadius: "0 100px 100px 0",
                borderWidth: "1px 1px 1px 0px",
                justifyContent: "normal",
                margin: "0px",
                "& .MuiButton-icon": {
                  marginLeft: "0px !important",
                  marginRight: "5px !important",
                },
                "&:hover":{
                  backgroundColor: scroll ? "#f4f4f4" : "rgba(29, 29, 29, .8)"
                }
              }}
            ></Button>

            <Popper
              onClick={() => setOpenCurrencyPopper(false)}
              id={currencyId}
              sx={{
                width: "778px",
                height: "512px",
                zIndex: "10",
                boxShadow: "0 0 24px 2px rgba(0,0,0,.08)",
              }}
              open={openCurrencyPopper}
              anchorEl={anchorElCurrency}
              transition
              modifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [-110, 10],
                  },
                },
              ]}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "24px 0px 30px 24px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    <Arrow className="arrow" left="63%" />
                    <Typography
                      variant="h7"
                      sx={{
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "#1d1d1d",
                        marginBottom: "10px",
                      }}
                    >
                      Currency
                    </Typography>
                    <CurrencyMenu
                      onStateChange={handleCurrencyChange}
                      currency={selectedCurrency}
                    />
                  </Paper>
                </Fade>
              )}
            </Popper>
          </Stack>
          <Button
            variant="contained"
            disableRipple
            sx={{

              padding: "0px 18px",
              height: "32px",
              backgroundColor: scroll ? "white" : theme.palette.customTransparent.gray,
              color: scroll ? "#1d1d1d" :"white",
              border: scroll ? "1px solid #dfdfdf" :"none",
              borderRadius: "100px",
              borderWidth: "1px",
              lineHeight: "1.6px",
              fontSize: "15px",
              fontWeight: "400",
              marginLeft: "8px",
              textTransform: "uppercase",
              "&:hover":{
                backgroundColor: scroll ? "#f4f4f4" : "rgba(29, 29, 29, .8)"
              }
            }}
          >
            {t("loginbtn")}
          </Button>
          <Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: theme.palette.customGreen.main,
              textTransform: "uppercase",
              borderRadius: "100px",
              height: "32px",
              marginLeft: "8px",
              "&:hover": { backgroundColor: theme.palette.customGreen.dark },
            }}
          >
            {t("signupbtn")}
          </Button>
        </Stack>
    
        </Container>     
      </Box>
      </Hidden>
<Box sx={{display: { xs: "flex", md: "none", }, width:"100%", alignItems:"center", height:"56px", justifyContent:"space-between", background: scroll ? "white" : "transparent", position:"fixed", zIndex:"3"}}>
<IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{
          margin:"14px",
          padding:"0px",
          color: scroll ? theme.palette.customGreen.main : "white",
   
         
        }}
      >
        <MenuIcon />
       
      </IconButton>
       {scroll && (<>
      <Link
            href="/"
            sx={{
              backgroundImage: "url('/wego-logo.webp')",
              backgroundSize: "contain",
              height: "40px",
              width: "100px",
              position:"absolute",
              margin:"auto",
              top:0,
              left:0,
              right:0,
              bottom:0,
            }}
          ></Link>
          <Button sx={{background:"#44b50c", margin:"10px 16px", border: "2px solid #44b50c", color:"#fff", fontSize:"0.875rem", padding:"8px 16px",lineHeight:1.2, fontWeight:500, borderRadius:"100px", textTransform:"none"}} >Use App</Button>
          </>
       )
}
</Box>
      
      <div style={{ width: "100%" }}>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{ width: "75%", "& .MuiPaper-root": { width: "75%" } }}
        >
          <Box
            sx={{ width: "100%", background: theme.palette.background.paper }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "9px",
                backgroundColor: "#fafafa",
              }}
            >
              <Link
                href="/"
                sx={{
                  backgroundImage: "url('/wego-logo.webp')",
                  backgroundSize: "contain",
                  height: "40px",
                  width: "100px",
                }}
              ></Link>
            </Box>
            <Divider aria-hidden="true" sx={{ border: "1px solid #d8d6dc" }} />
            <Box sx={{ margin: "7px 0px" }}>
              {drawerItems.map((item, index) => (
                <Stack
                  direction="row"
                  key={index}
                  sx={{
                    height: "48px",
                    alignItems: "center",
                    paddingLeft: "18px",
                    marginTop: "5px",
                  }}
                >
                  <img
                    src={item.img}
                    width="28px"
                    height="28px"
                    alt={item.title}
                    style={{ marginRight: "20px" }}
                  />
                  <Stack>
                    {item.subtitle && (
                      <Typography variant="p" sx={{ fontWeight: "600" }}>
                        {item.subtitle}
                      </Typography>
                    )}
                    <Typography variant="p">{item.title}</Typography>
                  </Stack>
                  {item.tag && (
                    <p
                      style={{
                        padding: "1px 8px",
                        background: "#ff9800",
                        borderRadius: "4px",
                        color: "white",
                        fontWeight: "500",
                        position: "absolute",
                        right: "10px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {item.tag}
                    </p>
                  )}
                </Stack>
              ))}
            </Box>
            <Divider aria-hidden="true" />
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
