import { React, useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import CurrencyFlag from "react-currency-flags";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router';
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
const Header = ({ headerTab }) => {

  const dir = document.documentElement.dir;
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const router = useRouter();

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
  const [bookingHistory, setBookingHistory] = useState(false)
  //mobile toggle drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerItems = [
    { title: "Search Flights", position: "-48px -72px" },
    { title: "Search Hotels", position: "0 -96px" },
    {
      img: "wegopro.svg",
      title: "Business Travel",
      subtitle: "WegoPro",
      imgUrl: "/fly.png",
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
  const [countryName, setCountryName] = useState("Pakistan")
  const [drawerlan, setDrawerLan] = useState("English")

  const handleChildStateChange = (newState) => {
    console.log("change", newState);
    setCountryName(newState.countryName)
    setSelectedFlag(newState.currencyCode);
    setLan(newState.lan.toUpperCase());
    i18n.changeLanguage(newState.lan.toUpperCase());
  };
  const updateLang = (selected) => {
    setLan(selected.code);
    setDrawerLan(selected.name)
    console.log(selected, "language")
    try {
      i18n.changeLanguage(selected.code); // Centralized language update
      console.log("i18n Language:", i18n.language);
      console.log("i18n Direction:", i18n.dir(selected.code));
      document.documentElement.dir = i18n.dir(selected.code);
    } catch (error) {
      console.error("Error changing language:", error); // Centralized error handling
    }
  };


  useEffect(() => {
    const newDir = i18n.dir(i18n.language);

    // ✅ Only update if the direction actually changes
    if (document.documentElement.dir !== newDir) {
      console.log("🌍 Changing direction to:", newDir);
      document.documentElement.dir = newDir;
    }
  }, [i18n.language]); // ✅ Runs only when the language changes

  const handleCurrencyChange = (newState) => {
    setSelectedcurrency(newState);
  };
  useEffect(() => {
    setSelectedcurrency(selectedFlag);
  }, [selectedFlag]);

  const handleRoute = (tab) => {
    if (tab === "hotels") {
      router.replace('/hotels', undefined, { scroll: false });
    } else if (tab === "flights") {
      router.replace('/flights', undefined, { scroll: false });
    }
  }

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scrollY (0 at top, 1 when scrolled 100px or more)
  const opacity = Math.min(scrollY / 50, 1); // Clamped between 0 and 1
  const translateY = Math.max(0 - scrollY / 2, 0); // Starts at 45p


  const [scroll, setscroll] = useState(false);
  const changeNavBg = () => {
    setscroll(window.scrollY > 1);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      changeNavBg();
      window.addEventListener('scroll', changeNavBg);
      return () => {
        window.removeEventListener('scroll', changeNavBg);
      };
    }
  }, []);

  return (
    <>
    {/* desktop header */}
      <Hidden smDown>
        <Box
          height="72px"
          sx={{
            width: "100%", position: "fixed", zIndex: 999, backgroundColor: scroll ? "white" : "transparent", boxShadow: scroll ? "0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2)" : "none"
          }}
        >
          <Container sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row", height: "100%", }}>
          {/* left side of header */}
            <Box height="100%" sx={{ display: "flex", alignItems: "center", gap: "0 40px", }}>
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
                <Stack direction="row" sx={{ gap: "0 2rem", whiteSpace: "no-wrap", height: "100%" }}>

                  <Link sx={{ display: "flex", alignItems: "center", fontSize: "15px", color: "#1d1d1d", fontWeight: "600", height: "100%", lineHeight: "1.6", position: "relative", textDecoration: "none", cursor: "pointer", color: headerTab === "flights" ? "#44b506" : "inherit" }} onClick={() => handleRoute("flights")} > {t("flights")}  <Box sx={{
                    height: "100%",
                    width: "100%",
                    borderBottom: headerTab === "flights" ? "4px solid #44b506" : "0px",
                    position: "absolute"
                  }}></Box></Link>

                  <Link sx={{ display: "flex", alignItems: "center", fontSize: "15px", color: "#1d1d1d", fontWeight: "600", height: "100%", lineHeight: "1.6", position: "relative", textDecoration: "none", cursor: "pointer", color: headerTab === "hotels" ? "#44b506" : "inherit" }} onClick={() => handleRoute("hotels")} > {t("hotels")}
                    <Box sx={{
                      height: "100%",
                      width: "100%",
                      borderBottom: headerTab === "hotels" ? "4px solid #44b506" : "0px",
                      position: "absolute"
                    }}></Box></Link>
                  <Stack direction="row" onClick={handleMoreClick} sx={{ gap: "6px", fontWeight: "600", alignItems: "center", fontSize: "15px", cursor: "pointer", marginRight: "0.5rem" }}> {t("more")}
                    <ArrowDropDownIcon
                      sx={{
                        width: "28px",
                        height: "28px",
                        color: "#767676",
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
                    sx={{ ".MuiPaper-root": { borderRadius: "0px !important" } }}
                  >
                    <MenuItem disableRipple onClick={handleMoreClose} sx={{ fontWeight: "400", fontSize: "15px", height: "56px" }}><Typography sx={{ fontWeight: "600", fontSize: "15px", mr: "4px" }}>WegoPro</Typography>Business Travel</MenuItem>
                    <MenuItem disableRipple onClick={handleMoreClose} sx={{ fontWeight: "400", fontSize: "15px", height: "56px" }}>Travel Blog</MenuItem>


                  </Menu>
                </Stack>
              }

            </Box>
            {/* right side of header */}
            <Stack direction="row" alignItems="center">
              {/* three joint btns */}
              <Stack direction="row" sx={{ gap: scroll ? "0px" : "1px" }}>
                {/* select country */}
                <Button
                  variant="contained"
                  disableRipple
                  startIcon={
                    <CurrencyFlag currency={selectedFlag} width="20" height="14" />
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
                    color: scroll ? "#767676" : "white",
                    border: scroll ? "1px solid #dfdfdf" : "none",
                    borderRadius:  dir === "ltr" ?  {lg: "100px 0 0 100px", md: "100px", sm: "100px"} : {lg:"0px 100px 100px 0px"},
                    height: "32px",
                    width: "75px",
                    borderWidth: dir === "ltr" ? "1px 0px 1px 1px" : "1px 1px 1px 0px",
                    padding: "0px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "normal",
                    "& .MuiButton-icon": {
                      marginLeft: "0px !important",
                      marginRight: dir === "ltr" ? "5px !important" : "2px !important",
                    },

                    "&:hover": {
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
                    direction: "ltr",
                    height: "512px",
                    boxShadow: "0 0 24px 2px rgba(0,0,0,.08)",
                    right: "0px",
                    zIndex: "9999",
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

                  {/* select language */}
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
                    color: scroll ? "#1d1d1d" : "white",
                    border: scroll ? "1px solid #dfdfdf" : "none",
                    height: "32px",
                    width: "78px",
                    padding: "0px 16px",
                    display: { lg: "flex", md: "none", sm: "none" },
                    alignItems: "center",
                    justifyContent: "normal",
                    "& .MuiButton-icon": {
                      marginLeft: "0px !important",
                      marginRight: dir === "ltr" ? "5px !important" : "2px !important",
                    },
                    "&:hover": {
                      backgroundColor: scroll ? "#f4f4f4" : "rgba(29, 29, 29, .8)"
                    }
                  }}
                ></Button>
                <Popper
                  onClick={() => setOpenLanPopper(false)}
                  id={lanId}
                  sx={{
                    width: "588px",
                    zIndex: "9999",
                    direction: "ltr",
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

                {/* select currency */}
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
                    color: scroll ? "#1d1d1d" : "white",
                    border: scroll ? "1px solid #dfdfdf" : "none",
                    height: "32px",
                   padding:"0px 12px",
                    display: { lg: "flex", md: "none", sm: "none" },
                    alignItems: "center",
                    borderRadius:  dir === "ltr" ?  {lg: "0px 100px 100px 0px", md: "0px 100px 100px 0px", sm: "0px 100px 100px 0px"} : {lg:"100px 0px 0px 100px"},
                    borderWidth:  dir === "ltr" ?  "1px 1px 1px 0px" : "1px 0px 1px 1px",
                    justifyContent: "normal",
                    margin: "0px",
                    "& .MuiButton-icon": {
                      marginLeft: "0px !important",
                      marginRight:"2px",
                    },
                    "&:hover": {
                      backgroundColor: scroll ? "#f4f4f4" : "rgba(29, 29, 29, .8)"
                    }
                  }}
                ></Button>
                <Popper
                  onClick={() => setOpenCurrencyPopper(false)}
                  id={currencyId}
                  sx={{
                    width: "778px",
                    direction: "ltr",
                    left: dir === "rtl" && "8% !important",
                    height: "512px",
                    zIndex: "9999",
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
                        <Arrow className="arrow" left={dir === "ltr" ? "63%" : "30%"} />
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

                  padding: "0px 16px",
                  height: "32px",
                  backgroundColor: scroll ? "white" : theme.palette.customTransparent.gray,
                  color: scroll ? "#1d1d1d" : "white",
                  border: scroll ? "1px solid #dfdfdf" : "none",
                  borderRadius: "100px",
                  borderWidth: "1px",
                  lineHeight: "1.6px",
                  fontSize: "15px",
                  fontWeight: "400",
                  marginLeft:  dir === "ltr" ? "8px" :"0px",
                  marginRight:  dir === "ltr" ? "0px" :"8px",
                  textTransform: "uppercase",
                  "&:hover": {
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
                  padding: "0px 16px",
                  fontSize:"15px",
                  fontWeight:"500",
                  minWidth:"fit-content",
                  height: "32px",
                  display:"block",
                  marginLeft:  dir === "ltr" ? "8px" :"0px",
                  marginRight:  dir === "ltr" ? "0px" :"8px",
                  "&:hover": { backgroundColor: theme.palette.customGreen.dark },
                }}
              >
                {t("signupbtn")}
              </Button>
            </Stack>

          </Container>
        </Box>
      </Hidden>

      <Hidden smUp>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            position: "absolute",
            zIndex: 99,
            margin: "14px",
            padding: "0px",
            color: "white",
            display: scroll ? "none " : "flex"

          }}
        >
          <MenuIcon />
        </IconButton>
        {/* responsive header  */}
        <Box sx={{
          display: { xs: "flex", md: "none", }, opacity: opacity,
          transform: `translateY(${translateY}px)`, top: 0, transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out", width: "100%", alignItems: "center", height: "56px", justifyContent: "space-between", background: scroll ? "white" : "transparent", position: "fixed", zIndex: "16"
        }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{

              margin: "14px",
              padding: "0px",
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
                position: "absolute",
                margin: "auto",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            ></Link>
            <Button sx={{ background: "#44b50c", margin: "10px 16px", border: "2px solid #44b50c", color: "#fff", fontSize: "0.875rem", padding: "8px 16px", lineHeight: 1.2, fontWeight: 500, borderRadius: "100px", textTransform: "none" }} >Use App</Button>
          </>
          )
          }
        </Box>
        {scrollY > 56 &&
          <Box sx={{
            width: "100%", display: "flex",
            top: "56px", transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", transform: `translateY(${Math.min(0, scrollY - 106)}px)`, alignItems: "center", boxShadow: "0 2px 4px 1px rgba(39, 36, 44, .12)", height: "48px", position: "fixed", zIndex: "15", background: "white"
          }}>
            <Link sx={{ display: "flex", fontSize: "14px", alignItems: "center", justifyContent: "center", width: "50%", height: "100%", textDecoration: "none", color: "#27242c" }} href="/flights">
              <Box sx={{ backgroundPosition: "0 -24px", m: 0, p: 0, height: "24px", width: "24px", mr: "8px", background: "no-repeat", backgroundImage: "url(mweb-homepage.png)", backgroundSize: "48px 48px" }}>
              </Box> {t("flights")}</Link>
            <Box sx={{ height: "25px", m: 0, p: 0, borderLeft: "2px solid #d9d9d9" }}></Box>
            <Link sx={{ display: "flex", fontSize: "14px", alignItems: "center", justifyContent: "center", width: "50%", height: "100%", textDecoration: "none", color: "#27242c" }} href="/hotels">
              <Box sx={{ backgroundPosition: "-24px -24px", m: 0, p: 0, height: "24px", width: "24px", mr: "8px", background: "no-repeat", backgroundImage: "url(mweb-homepage.png)", backgroundSize: "48px 48px" }}></Box>
              {t("hotels")}</Link>

          </Box>
        }
      </Hidden>

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

              <Box sx={{ padding: "8px 0px", borderBottom: "1px solid #e5e3e8" }}>
                <Stack onClick={() => router.push("/flights")} direction="row" sx={{ position: "relative", height: "48px", color: "#27242c", fontSize: "14px", textDecoraion: "none", alignItems: "center" }}>
                  <Box sx={{ backgroundPosition: "-48px -72px", width: "24px", height: "24px", backgroundImage: "url(/drawer_icons.webp)", backgroundSize: "72px 120px", margin: "0 16px", flexShrink: 0 }}></Box>
                  Search Flights</Stack>
                <Stack onClick={() => router.push("/hotels")} direction="row" sx={{ position: "relative", height: "48px", color: "#27242c", fontSize: "14px", textDecoraion: "none", alignItems: "center" }}>
                  <Box sx={{ backgroundPosition: "0 -96px", width: "24px", height: "24px", backgroundImage: "url(/drawer_icons.webp)", backgroundSize: "72px 120px", margin: "0 16px", flexShrink: 0 }}></Box>
                  Search Hotels</Stack>
                <Stack direction="row" alignItems="center" sx={{ position: "relative", justifyContent: "space-between", height: "48px", color: "#27242c", fontSize: "14px", textDecoraion: "none", alignItems: "center" }}>
                  <Stack direction="row" alignItems="center" sx={{ alignContent: "CENTER" }}>
                    <Box sx={{ width: "24px", height: "24px", margin: "0 16px", flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24"><g opacity="0.8"><path d="M10.647 12.055l-1.691 2.823H2.83A2.836 2.836 0 010 12.046c0-.786.316-1.493.832-2a2.821 2.821 0 012-.833h6.114l1.701 2.842zM24 12.046c0 .786-.316 1.493-.832 1.998a2.804 2.804 0 01-2 .834H15.56l.94-1.565a2.472 2.472 0 000-2.526l-.94-1.574h5.608A2.83 2.83 0 0124 12.045" fill="#1686F7"></path><path d="M16.5 13.313l-.94 1.565H8.956l1.691-2.823-1.7-2.842h6.613l.94 1.575c.462.779.462 1.745 0 2.525z" fill="#0169E6"></path><path d="M15.56 14.878l-1.61 2.686-1.593 2.659A2.815 2.815 0 019.924 21.6c-.498 0-.995-.128-1.448-.4a2.837 2.837 0 01-.976-3.889l1.456-2.433h6.604zM15.56 9.213H8.947L7.5 6.79a2.829 2.829 0 01.976-3.88A2.831 2.831 0 019.933 2.5c.96 0 1.9.498 2.424 1.385l1.593 2.651 1.61 2.677z" fill="#10C8ED"></path></g></svg>
                    </Box>
                    <Stack direction="column">
                      <Typography variant="div" sx={{ fontWeight: "600" }}>WegoPro</Typography>
                      <Typography variant="div">Business Travel</Typography>
                    </Stack>
                  </Stack>
                  <p
                    style={{
                      padding: "1px 8px",
                      background: "#ff9800",
                      borderRadius: "4px",
                      color: "white",
                      fontWeight: "500",
                      position: "absolute",
                      right: "10px",
                      margin: "0 16px",
                      fontSize: "0.75rem",
                    }}
                  >
                    New
                  </p>
                </Stack>

              </Box>
            </Box>


            <Box sx={{ padding: "8px 0px", borderBottom: "1px solid #e5e3e8" }}>
              <Stack direction="row" sx={{ position: "relative", height: "48px", color: "#27242c", fontSize: "14px", textDecoraion: "none", alignItems: "center" }}>
                <Box sx={{ backgroundPosition: "0 -48px", width: "24px", height: "24px", backgroundImage: "url(/drawer_icons.webp)", backgroundSize: "72px 120px", margin: "0 16px", flexShrink: 0 }}></Box>
                Login / Sign up</Stack>
              <Stack onClick={() => setBookingHistory(!bookingHistory)} direction="row" sx={{ position: "relative", justifyContent: "space-between", height: "48px", color: "#27242c", fontSize: "14px", textDecoraion: "none", alignItems: "center" }}>
                <Stack direction="row">
                  <Box sx={{ backgroundPosition: "-24px 0", width: "24px", height: "24px", backgroundImage: "url(/drawer_icons.webp)", backgroundSize: "72px 120px", margin: "0 16px", flexShrink: 0 }}></Box>
                  <Box>
                    Booking History
                  </Box>
                </Stack>
                <ArrowDropDownIcon sx={{
                  margin: "0 16px", transform: bookingHistory
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }} />
              </Stack>

              {bookingHistory && (<>
                <Link sx={{ height: "48px", m: 0, p: 0, display: "flex", alignItems: "center", color: "#27242c", fontSize: "14px", ml: "58px", textDecoration: "none" }} href="/hotels/booking/history">
                  <Box>Hotels</Box>
                </Link>
                <Link sx={{ height: "48px", m: 0, p: 0, display: "flex", alignItems: "center", color: "#27242c", fontSize: "14px", ml: "58px", textDecoration: "none" }} href="/hotels/booking/history">
                  <Box> {t("flights")}</Box>
                </Link>
              </>
              )}


            </Box>

            <Box sx={{ padding: "8px 0", borderBottom: "1px solid #e5e3e8" }}>
              <Typography sx={{ fontSize: "12px", color: "#828086", margin: "8px 16px" }}>Settings</Typography>
              {/* country */}
              <Stack aria-describedby={countryId}
                onClick={handleCountryClick} direction="row" sx={{
                  m: 0, p: 0, position: "relative", height: " 48px",
                  display: "flex",
                  alignItems: "center",
                  color: "#27242c",
                  fontSize: "14px",
                  textDecoration: "none"
                }}>
                <Box sx={{ m: 0, p: 0, backgroundPosition: "-48px 0", width: "24px", height: "24px", backgroundImage: "url(/drawer_icons.webp)", backgroundSize: "72px 120px", margin: "0 16px", flexShrink: 0 }}></Box>
                <Box sx={{ color: "#27242c", m: 0, p: 0, display: "flex", flexDirection: "column", fontSize: "14px" }}>
                  <span>Country/Region</span>
                  <Typography variant="span" sx={{ fontSize: "12px", color: "#afadb4", mt: "2px" }}>{countryName}</Typography>
                </Box>
              </Stack>
              <Popper placement="top"
                onClick={() => setOpenCountryPopper(false)}
                id={countryId}
                sx={{
                  width: "70%",
                  height: "240px",
                  boxShadow: "0 0 24px 2px rgba(0,0,0,.08)",
                  zIndex: "99999",
                  position: "absolute"
                }}
                open={openCountryPopper}
                anchorEl={anchorElCountry}
                transition
                modifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [0, -40],
                    },
                  },
                ]}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper
                      elevation={3}
                      sx={{
                        pl: 1,
                        width: "100%",
                        overflow: "hidden",
                        height: "100%",
                      }}
                    >
                      <CountryCurrencyFlags
                        onStateChange={handleChildStateChange}
                        flag={selectedFlag}
                      />
                    </Paper>
                  </Fade>
                )}
              </Popper>

              {/* currency */}
              <Stack onClick={handleCurrencyClick}
                aria-describedby={currencyId} direction="row" sx={{
                  m: 0, p: 0, position: "relative", height: " 48px",
                  display: "flex",
                  alignItems: "center",
                  color: "#27242c",
                  fontSize: "14px",
                  textDecoration: "none"
                }}>
                <Box sx={{ m: 0, p: 0, backgroundPosition: "0px -24px", width: "24px", height: "24px", backgroundImage: "url(/drawer_icons.webp)", backgroundSize: "72px 120px", margin: "0 16px", flexShrink: 0 }}></Box>
                <Box sx={{ color: "#27242c", m: 0, p: 0, display: "flex", flexDirection: "column", fontSize: "14px" }}>
                  <span>Currency</span>
                  <Typography variant="span" sx={{ fontSize: "12px", color: "#afadb4", mt: "2px" }}>{selectedCurrency}</Typography>
                </Box>
              </Stack>
              <Popper placement="top"
                onClick={() => setOpenCurrencyPopper(false)}
                id={currencyId}
                sx={{
                  width: "70%",
                  height: "270px",
                  zIndex: "99999",
                  position: "absolute",
                  boxShadow: "0 0 24px 2px rgba(0,0,0,.08)",
                }}
                open={openCurrencyPopper}
                anchorEl={anchorElCurrency}
                transition
                modifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [0, -40],
                    },
                  },
                ]}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper
                      elevation={3}
                      sx={{
                        pl: 1,

                        overflow: "hidden",
                        height: "100%",
                      }}
                    >

                      <CurrencyMenu
                        onStateChange={handleCurrencyChange}
                        currency={selectedCurrency}
                      />
                    </Paper>
                  </Fade>
                )}
              </Popper>



              {/* language */}
              <Stack aria-describedby={lanId}
                onClick={handleLanClick} direction="row" sx={{
                  m: 0, p: 0, position: "relative", height: " 48px",
                  display: "flex",
                  alignItems: "center",
                  color: "#27242c",
                  fontSize: "14px",
                  textDecoration: "none"
                }}>
                <Box sx={{ m: 0, p: 0, backgroundPosition: "-48px -24px", width: "24px", height: "24px", backgroundImage: "url(/drawer_icons.webp)", backgroundSize: "72px 120px", margin: "0 16px", flexShrink: 0 }}></Box>
                <Box sx={{ color: "#27242c", m: 0, p: 0, display: "flex", flexDirection: "column", fontSize: "14px" }}>
                  <span>Language</span>
                  <Typography variant="span" sx={{ fontSize: "12px", color: "#afadb4", mt: "2px" }}>{drawerlan}</Typography>
                </Box>
              </Stack>
              <Popper
                onClick={() => setOpenLanPopper(false)}
                id={lanId}
                placement="top"
                sx={{
                  width: "70%",
                  height: "270px",
                  zIndex: "9999",
                  position: "absolute",
                  boxShadow: "0 0 24px 2px rgba(0,0,0,.08)",
                }}
                open={openLanPopper}
                anchorEl={anchorElLan}
                transition
                modifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [0, -40],
                    },
                  },
                ]}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper
                      elevation={3}
                      sx={{
                        pl: 1,

                        overflow: "hidden",
                        height: "100%",
                      }}
                    >


                      <LanguagesMenu onStateChange={updateLang} lang={lan} />
                    </Paper>
                  </Fade>
                )}
              </Popper>


            </Box>


            {/* travel blog */}
            <Stack direction="row" sx={{ position: "relative", height: "48px", color: "#27242c", fontSize: "14px", padding: "8px 0px", textDecoraion: "none", alignItems: "center" }}>
              <Box sx={{ backgroundPosition: "0 0px", width: "24px", height: "24px", backgroundImage: "url(/drawer_icons.webp)", backgroundSize: "72px 120px", margin: "0 16px", flexShrink: 0 }}></Box>
              Travel Blog</Stack>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
