import { React, useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import CurrencyFlag from "react-currency-flags";
import Button from "@mui/material/Button";

import { useTranslation } from 'react-i18next';
import { useTheme, styled } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Box,
  Divider,
  Link,
  IconButton,
  Popper,
  Paper,
  Drawer
} from "@mui/material";
import Fade from "@mui/material/Fade";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CountryCurrencyFlags from "./CountryCurrencyFlags";
import CurrencyMenu from "./CurrencyMenu";
import MenuIcon from '@mui/icons-material/Menu';
import LanguagesMenu from "./LanguagesMenu";
const Header = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  
 
//mobile toggle drawer
const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
  const [openLanPopper, setOpenLanPopper] = useState(false)
  const [anchorElCountry, setAnchorElCountry] = useState(null);
  const [anchorElCurrency, setAnchorElCurrency] = useState(null);
  const [anchorElLan, setAnchorElLan] = useState(null);
  const [selectedFlag, setSelectedFlag] = useState("PKR");
  const [selectedCurrency, setSelectedcurrency] =useState(selectedFlag)
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
    setOpenCurrencyPopper(false)
  };
  const canBeOpenCountry = openCountryPopper && Boolean(anchorElCountry);
  const canBeOpenCurrency = openCurrencyPopper && Boolean(anchorElCurrency);
  const canBeOpenLan = openLanPopper && Boolean(anchorElLan);
  const countryId = canBeOpenCountry ? "country-popper" : undefined;
  const currencyId = canBeOpenCurrency ? "currency-popper" : undefined;
  const lanId = canBeOpenLan ? "language-popper" : undefined;
  const [lan, setLan] = useState('EN')
 
  
  const handleChildStateChange = (newState) => {
    console.log("change", newState)
    setSelectedFlag(newState.currencyCode);
    setLan(newState.lan.toUpperCase());
    i18n.changeLanguage(newState.lan.toUpperCase());
 
  };
const updateLang =(selected) =>{
  setLan(selected)
  try {
    i18n.changeLanguage(selected); // Centralized language update
  } catch (error) {
    console.error('Error changing language:', error); // Centralized error handling
  }
}

  const handleCurrencyChange = (newState) => {
    setSelectedcurrency(newState);
  };
  useEffect(() => {
    setSelectedcurrency(selectedFlag);
  }, [selectedFlag]);
  return (
    <>
    <Stack direction="row" justifyContent="space-between" height="72px" sx={{display: { xs: 'none', md: 'flex' }}}>

      <Box height="100%" sx={{ display:"flex",alignItems: "center",  }}>

        <Link
          href="/"
          sx={{
            backgroundImage: "url('/logo.webp')",
            backgroundPosition: "0 -41px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100px 81px",
            height: "40px",
            width: "100px",
          }}
        ></Link>
      </Box>
      <Stack direction="row" alignItems="center">
        <Stack direction="row" gap="2px">
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
                  transform: openCountryPopper ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            }
            sx={{
              backgroundColor: theme.palette.customTransparent.gray,
              borderRadius: "100px 0 0 100px",
              height: "32px",
              width: "75px",
              borderWidth: "1px 0 1px 1px",
              padding: "0px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "normal",
            }}
            aria-describedby={countryId}
            onClick={handleCountryClick}
          ></Button>
          <Popper onClick={()=> setOpenCountryPopper(false)}
            id={countryId}
            sx={{
              width: "778px",
              height: "512px",
              boxShadow: "0 0 24px 2px rgba(0,0,0,.08)",
              right: "0px",
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
                  <Arrow className="arrow" left="44%"  />
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
                  <CountryCurrencyFlags onStateChange={handleChildStateChange} />
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
              <Typography variant="body1" sx={{ fontSize: "15px !important" }}>
                {lan}
              </Typography>

            }
            endIcon={
              <ArrowDropDownIcon sx={{ width: "28px", height: "28px" }} />
            }
            sx={{
              backgroundColor: theme.palette.customTransparent.gray,
              height: "32px",
              width: "78px",
              padding: "0px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "normal",
            }}
          ></Button>
           <Popper onClick={()=>setOpenLanPopper(false)}
            id={lanId}
            sx={{
              width: "588px",
           
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
                    padding: "24px 0px 30px 24px",
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
                  <LanguagesMenu onStateChange={updateLang}/>
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
              <Typography variant="body1" sx={{ fontSize: "15px !important" }}>
                {selectedCurrency}
              </Typography>
            }
            endIcon={
              <ArrowDropDownIcon sx={{ width: "28px", height: "28px", transform: openCurrencyPopper ? "rotate(180deg)" : "rotate(0deg)", }} />
            }
            sx={{
              backgroundColor: theme.palette.customTransparent.gray,
              height: "32px",
              padding: "0px 16px",
              display: "flex",
              alignItems: "center",
              borderRadius: "0 100px 100px 0",
              borderWidth: "1px 1px 1px 0px",
              justifyContent: "normal",
            }}
          ></Button>

          <Popper onClick={()=>setOpenCurrencyPopper(false)}
            id={currencyId}
            sx={{
              width: "778px",
              height: "512px",
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
                  <CurrencyMenu onStateChange={handleCurrencyChange}/>
                </Paper>
              </Fade>
            )}
          </Popper>
        </Stack>
        <Button
          variant="contained"
          disableRipple
          sx={{
            backgroundColor: theme.palette.customTransparent.gray,
            padding: "0px 18px",
            height: "32px",
            borderRadius: "100px",
            borderWidth: "1px",
            lineHeight: "1.6px",
            fontSize: "15px",
            fontWeight: "400",
            marginLeft: "8px",
            textTransform:"uppercase"
          }}
        >
          {t('loginbtn')}
        </Button>
        <Button
          variant="contained"
          disableRipple
          sx={{
            backgroundColor: theme.palette.customGreen.main,
            textTransform:"uppercase",
            borderRadius: "100px",
            height: "32px",
            marginLeft: "8px",
            "&:hover": { backgroundColor: theme.palette.customGreen.dark },
          }}
        >
         {t('signupbtn')}
        </Button>
      </Stack>
    </Stack>
    <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={toggleDrawer(true)}
    sx={{
      display: { xs: 'block', md: 'none' },
      color:theme.palette.background.paper, top:'10px', left:'0px'
    }}
  >
    <MenuIcon />
  </IconButton>
  <div style={{width:"100%"}}>
  <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{width:"80%", "& .MuiPaper-root": {width:"80%"}}}
      >
        <Box   sx={{width:"100%",background:theme.palette.background.paper}}>
        <Box  sx={{ display:"flex",alignItems: "center", padding:"15px 20px" }}>

     <Link
       href="/"
       sx={{
         backgroundImage: "url('/logo.webp')",

         backgroundRepeat: "no-repeat",
         backgroundSize: "100px 81px",
         height: "40px",
         width: "100px",
       }}
     ></Link>
   </Box>
   <Divider aria-hidden="true" />
        </Box>
      </Drawer>
      </div>
  </>
  );
};

export default Header;
