import React from 'react'
import {
    Button,
    Stack,
    Box,
    TextField,
    Typography,
    Autocomplete,
    Popper,
    Popover,
    Grid,
    Paper,
    Divider,
    InputAdornment,
    IconButton,
    SvgIcon,
    Checkbox,
    ClickAwayListener,
    FormControlLabel,
    Card,
    CardContent,
    CardActions,
    MenuItem,
    Select,
    FormControl,
  } from "@mui/material";
  import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";

dayjs.extend(localizedFormat);

const FlightContent = ({returnFlight}) => {
    const theme = useTheme();
    const fromPaperRef = useRef(null);
    const toPaperRef = useRef(null);
    const [from, setfrom] = useState(false);
  const [to, setTo] = useState(false);
  
  const destinations = [
    { id: 1, fullName: "Jeddah, Saudi Arabia (JED)", title: "Jeddah" },
    { id: 2, fullName: "Riyadh, Saudi Arabia (RUH)", title: "Riyadh" },
    { id: 3, fullName: "Dubai, United Arab Emirates (DXB)", title: "Dubai" },
    { id: 4, fullName: "Dammam, Saudi Arabia (DMM)", title: "Dammam" },
    { id: 5, fullName: "Al Madinah, Saudi Arabia (MED)", title: "Al Madinah" },
    { id: 6, fullName: "Muscat, Oman (MCT)", title: "Muscat" },
    { id: 7, fullName: "Manama, Bahrain (BAH)", title: "Manama" },
    {
      id: 8,
      fullName: "Sharjah, United Arab Emirates (SHJ)",
      title: "Sharjah",
    },
    {
      id: 9,
      fullName: "Abu Dhabi, United Arab Emirates (AUH)",
      title: "Abu Dhabi",
    },
    { id: 10, fullName: "Doha, Qatar (DOH)", title: "Doha" },
    { id: 11, fullName: "Kuwait, Kuwait (KWI)", title: "Kuwait" },
    {
      id: 12,
      fullName: "Buraydah Al-Qassim, Saudi Arabia (ELQ)",
      title: "Buraydah Al-Qassim",
    },
    { id: 13, fullName: "Baku, Azerbaijan (GYD)", title: "Baku" },
    { id: 14, fullName: "Kuala Lumpur, Malaysia (KUL)", title: "Kuala Lumpur" },
    { id: 15, fullName: "Abha, Saudi Arabia (AHB)", title: "Abha" },
    { id: 16, fullName: "Bangkok, Thailand (BKK)", title: "Bangkok" },
  ];
  const cities = [
    { id: 1, fullName: "Lahore, Pakistan (LHE)", title: "Lahore" },
    { id: 2, fullName: "Islamabad, Pakistan (ISB)", title: "Islamabad" },
    { id: 3, fullName: "Karachi, Pakistan (KHI)", title: "Karachi" },
    { id: 4, fullName: "Multan, Pakistan (MUX)", title: "Multan" },
    { id: 5, fullName: "Sialkot, Pakistan (SKT)", title: "Sialkot" },
    { id: 6, fullName: "Peshawar, Pakistan (PEW)", title: "Peshawar" },
    { id: 7, fullName: "Faisalabad, Pakistan (LYP)", title: "Faisalabad" },
    { id: 8, fullName: "Quetta, Pakistan (UET)", title: "Quetta" },
    { id: 9, fullName: "Hyderabad, Pakistan (HDD)", title: "Hyderabad" },
    {
      id: 10,
      fullName: "Dera Ghazi Khan, Pakistan (DEA)",
      title: "Dera Ghazi Khan",
    },
    { id: 11, fullName: "Bahawalpur, Pakistan (BHV)", title: "Bahawalpur" },
    {
      id: 12,
      fullName: "Rahim Yar Khan, Pakistan (RYK)",
      title: "Rahim Yar Khan",
    },
    { id: 13, fullName: "Sukkur, Pakistan (SKZ)", title: "Sukkur" },
    { id: 14, fullName: "Skardu, Pakistan (KDU)", title: "Skardu" },
    { id: 15, fullName: "Turbat, Pakistan (TUK)", title: "Turbat" },
    { id: 16, fullName: "Gwadar, Pakistan (GWD)", title: "Gwadar" },
  ];

  const [openFromPopper, setOpenFromPopper] = useState(false);
  const [anchorElFrom, setAnchorElFrom] = useState(null);
  const [depart, setdepart] = useState(false);
  const [returns, setreturns] = useState(false);
  const [openToPopper, setOpenToPopper] = useState(false);
  const [anchorElTo, setAnchorElTo] = useState(null);
  const today = dayjs().startOf("day");
  const handleFromClick = (event) => {
    setAnchorElFrom(event.currentTarget);
    setOpenFromPopper((prev) => !prev);
    setfrom(true);
  };
  const handleToClick = (event) => {
    setAnchorElTo(event.currentTarget);
    setOpenToPopper((prev) => !prev);
    setTo(true);
  };
  
  const canBeOpenFrom = openFromPopper && Boolean(anchorElFrom);
  const FromId = canBeOpenFrom ? "From-popper" : undefined;
  const canBeOpenTo = openToPopper && Boolean(anchorElTo);
  const ToId = canBeOpenTo ? "To-popper" : undefined;
  

  const [place, setPlace] = useState("Lahore, Pakistan (LHE)"); // State to manage text input
  const handleTextChange = (event) => {
    setPlace(event.target.value); // Update state when text is changed
  };
  const [destination, setDestination] = useState("");
  const handleDestinationChange = (event) => {
    setDestination(event.target.value); // Update state when text is changed
  };

  const [exchange, setExchange] = useState(false);
  const handleExchange = () => {
    if (destination != "" && place != "") {
      setDestination(place);
      setPlace(destination);
      setExchange(!exchange);
    }
  };
  const handleClickOutside = (event) => {
    // If click is outside the "From" Paper
    if (fromPaperRef.current && !fromPaperRef.current.contains(event.target)) {
      setfrom(false);
    }
    // If click is outside the "To" Paper
    if (toPaperRef.current && !toPaperRef.current.contains(event.target)) {
      setTo(false);
    }
  };
  const [close, setclose] = useState(true);
  useEffect(() => {
    if (from || to) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup when either "from" or "to" changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [to, from]);

  const [calender, setCalender] = useState(false);
  const [anchorCalender, setAnchorCalender] = useState(null);
  const handleCalender = (event) => {
    setAnchorCalender(event.currentTarget);
    setCalender(true);
  };
  const [dateValue, setDateValue] = useState([
    dayjs().startOf("day"),
    // dayjs().add(1, "day").startOf("day"),
  ]);
  const [disable, setdisable] = useState(true);
  const dayminus = (date) => {
    const today = dayjs().startOf("day");

    if (date === dateValue[0] && dateValue[0].isAfter(today)) {
      setDateValue((prevDate) => [
        dayjs(prevDate[0]).subtract(1, "day").startOf("day"),
        prevDate[1],
      ]);
    } else if (date === dateValue[1] && dateValue[1].isAfter(dateValue[0])) {
      setDateValue((prevDate) => [
        prevDate[0],
        dayjs(prevDate[1]).subtract(1, "day").startOf("day"),
      ]);
    }
  };

  const isToday = dateValue[0]?.isSame(today, "day");
  const isMaxRange = dateValue[1]?.isSame(dateValue[0]);
  const dayadd = (date) => {
    if (date === dateValue[0] && dateValue[0].isBefore(dateValue[1])) {
      setDateValue((prevDate) => [
        dayjs(prevDate[0]).add(1, "day").startOf("day"),
        prevDate[1],
      ]);
    } else if (date === dateValue[1]) {
      setDateValue((prevDate) => [
        prevDate[0],
        dayjs(prevDate[1]).add(1, "day").startOf("day"),
      ]);
    }
  };
  const handleDateChange = (newValue) => {
    setDateValue(newValue);
    console.log(newValue); // Log the new date values
  };
  const formatDate = (date) => (date ? date.format("ddd, DD MMM YYYY") : "");

  const handleClickAway = (event) => {
    if (!anchorCalender?.contains(event.target)) {
      setreturns(false);
      setdepart(false);
      setCalender(false);
    }
  };
  return (
    <Stack
           
            mt={2}
            sx={{  alignItems: "center", width:"100%", gap:{lg:"0 8px", md:"8px 0",  md:"8px 0"},
              flexDirection: {
                 md: "col",
                 xs: "col",
              lg: 'row', 
              
            }, }}
          >
            <Stack   
              direction="row"
              position="relative"
              sx={{
                gap: "0 8px",
                justifyContent: "center",
                alignItems: "center",
                width: {lg: returnFlight ? "50%": "100%", md: returnFlight ? "100%": "100%"}
                 
              }}
            >
              <Box
                sx={{
                 
                  p: 2,
                  minHeight: "64px",
                  padding: "0px",
                  position: "relative",
                  width: "50%"
                }}
              >
                <Paper
                  ref={fromPaperRef}
                  elevation={0}
                  sx={{
                    width: from ? "200%" : "100%",
                    position: from ? "absolute" : "relative",
                    zIndex: from ? "2" : "1",
                    p: from ? 2 : 0,
                    marginTop: from ? -2 : 0,
                    minHeight: "64px",
                    boxShadow: from ? "0 0 24px 2px rgba(0,0,0,.08)" : "none",
                    borderRadius: "16px",
                    transition: from ? "width 0.3s ease" : "",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      padding: "0px",
                      height: "64px",
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        p: 0,
                        margin: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        border: from
                          ? "1px solid #44b50c"
                          : "1px solid #dfdfdf",
                        "&:hover": {
                          border: from
                            ? "1px solid #44b50c"
                            : "1px solid #9c9c9c",
                        },
                      }}
                    >
                      <TextField
                        onClick={handleFromClick}
                        variant="standard"
                        placement="bottom-start"
                        size="small"
                        label="From"
                        value={place}
                        onChange={handleTextChange}
                        slotProps={{
                          inputLabel: {
                            shrink: !!place,
                            sx: {
                              transform: !place ? "translate(0, 6px)" : "", // Adjusts label positioning
                              left: 0,
                              position: "absolute",
                              color: "#767676", // Adjust color for better visibility
                            },
                          },
                        }}
                        InputProps={{
                          endAdornment: from && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={(event) => {
                                  event.stopPropagation(); // Prevent click event from bubbling up
                                  setPlace("");
                                }}
                                edge="end"
                                sx={{
                                  padding: "1px",
                                  borderRadius: "100px",
                                  background: "#767676",
                                  width: "22px",
                                  position: "absolute",
                                  top: "-3px",

                                  "&:hover": { backgroundColor: "black" },
                                }}
                              >
                                <SvgIcon>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    fill="#fff"
                                    class="P4rKBkFmrKv8JqDfjjOS"
                                  >
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                  </svg>
                                </SvgIcon>
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          width: "100%",
                          padding: "27px 40px 11px 16px",

                          borderRadius: "8px",
                          cursor: "pointer",
                          "& .MuiInput-underline:before": {
                            borderBottom: "none",
                          },
                          "& .MuiInputBase-root": {
                            marginTop: "0px",
                          },
                          "& .MuiInput-input": {
                            paddingLeft: "5px",
                          },
                          "& .MuiInputBase-input": {
                            fontWeight: "600",
                            paddingBottom: "0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          },
                          "& .MuiInput-underline:hover:before": {
                            borderBottom: "none !important",
                          },
                          "& .MuiFormLabel-root": {
                            paddingLeft: "20px",
                            paddingTop: "14px",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "rgba(0, 0, 0, 0.6)",
                          },

                          "& .MuiInput-root::after": {
                            borderBottom: "none",
                          },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #dfdfdf",
                        borderRadius: "50%",
                        height: "40px",
                        position: "absolute",
                        right: "-24px",
                        width: from ? "0px" : "40px",
                      }}
                    ></Box>
                  </Box>
                  {from && (
                    <Paper
                      onClick={(event) => {
                        event.stopPropagation(); // Prevent click events from bubbling up
                        setfrom(false);
                        setTo(true);
                        setclose(false);
                      }}
                      id={FromId}
                      sx={{
                        width: "100%",
                        boxShadow: "none",
                        paddingTop: "20px",
                        padding: "20px 8px 0px",
                      }}
                      open={openFromPopper}
                      anchorEl={anchorElFrom}
                      transition
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "#1d1d1d",
                          marginBottom: "10px",
                        }}
                      >
                        Popular cities
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {cities.map((city, index) => (
                          <Box
                            onClick={() => setPlace(city.fullName)}
                            key={city.id}
                            sx={{
                              height: "44px",
                              width: "25%",
                              display: "flex",
                              alignItems: "center",
                              "&:hover": {
                                backgroundColor: "#e7fddc",
                                color: "#188920",
                              },
                              cursor: "pointer",
                            }}
                          >
                            <Typography
                              variant="p"
                              sx={{
                                fontSize: "16px",
                                lineHeight: "24px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                padding: "0 8px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {city.title}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Paper>
                  )}
                </Paper>
              </Box>

              <Button
                disableRipple
                onClick={handleExchange}
                sx={{
                  alignItems: "center",
                  backgroundColor: "transparent",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  height: "36px",
                  color: "1px solid lightgray",
                  justifyContent: "center",
                  outline: "none",
                  position: "absolute",
                  transition: " transform .15s ease-out",
                  width: "36px",
                  zIndex: "2",
                  display: from ? "none" : "flex",
                  "&:hover": {
                    background: "transparent",
                  },
                  fill:
                    !!place && !!destination
                      ? theme.palette.customGreen.main
                      : "#bdbdbd",
                  transform: !exchange ? "rotate(180deg)" : "",
                }}
              >
                <SvgIcon>
                  <svg viewBox="0 0 24 24">
                    <path d="M17 4l-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z"></path>
                  </svg>
                </SvgIcon>
              </Button>

              <Box
                sx={{
                  width: "50%",
                  p: 2,
                  minHeight: "64px",
                  padding: "0px",
                  position: "relative",
                }}
              >
                <Paper
                  elevation={0}
                  ref={toPaperRef}
                  sx={{
                    width: to ? "150%" : "100%",
                    position: to ? "absolute" : "relative",
                    p: to ? 2 : 0,
                    marginTop: to ? -2 : 0,
                    minHeight: "64px",
                    zIndex: to ? "2" : "1",
                    boxShadow: to ? "0 0 24px 2px rgba(0,0,0,.08)" : "none",
                    borderRadius: "16px",
                    transition: "width 0.3s ease",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      height: "64px",
                      overflow: "hidden",
                      position: "relative",
                      padding: "0px",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        p: 0,
                        margin: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        border: to ? "1px solid #44b50c" : "1px solid #dfdfdf",
                        "&:hover": {
                          border: to
                            ? "1px solid #44b50c"
                            : "1px solid #9c9c9c",
                        },
                      }}
                    >
                      <TextField
                        onClick={handleToClick}
                        variant="standard"
                        placement="bottom-start"
                        size="small"
                        label="To"
                        value={destination}
                        onChange={handleDestinationChange}
                        slotProps={{
                          inputLabel: {
                            shrink: !!destination,
                            sx: {
                              transform: !destination
                                ? "translate(-4px, 6px)"
                                : "", // Adjusts label positioning
                              left: 0,
                              position: "absolute",
                              color: "#767676", // Adjust color for better visibility
                            },
                          },
                        }}
                        InputProps={{
                          endAdornment: to && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setDestination("")}
                                edge="end"
                                sx={{
                                  padding: "1px",
                                  borderRadius: "100px",
                                  background: "#767676",
                                  width: "22px",
                                  position: "absolute",
                                  top: "-3px",
                                  "&:hover": { backgroundColor: "black" },
                                }}
                              >
                                <SvgIcon>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    fill="#fff"
                                    class="P4rKBkFmrKv8JqDfjjOS"
                                  >
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                  </svg>
                                </SvgIcon>
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          width: "100%",
                          padding: "27px 35px 11px 35px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          "& .MuiInput-underline:before": {
                            borderBottom: "none",
                          },
                          "& .MuiInputBase-root": {
                            marginTop: "0px",
                          },
                          "& .MuiInput-input": {
                            paddingLeft: "10px",
                          },

                          "& .MuiInputBase-input": {
                            fontWeight: "600",
                            paddingBottom: "0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          },
                          "& .MuiInput-underline:hover:before": {
                            borderBottom: "none !important",
                          },
                          "& .MuiFormLabel-root": {
                            paddingLeft: "45px",
                            paddingTop: "14px",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "rgba(0, 0, 0, 0.6)",
                          },

                          "& .MuiInput-root::after": {
                            borderBottom: "none",
                          },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #dfdfdf",
                        borderRadius: "50%",
                        height: "40px",
                        position: "absolute",

                        width: to ? "0px" : "40px",
                        left: "-24px",
                        right: "auto",
                      }}
                    ></Box>
                  </Box>
                  {to && (
                    <Paper
                      onClick={() => {
                        setTo(false);
                        setclose(false);
                      }}
                      id={ToId}
                      sx={{
                        width: "100%",
                        boxShadow: "none",
                        paddingTop: "20px",

                        padding: "20px 8px 0px",
                      }}
                      open={openToPopper}
                      anchorEl={anchorElTo}
                      transition
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "#1d1d1d",
                          marginBottom: "10px",
                        }}
                      >
                        Popular cities
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {destinations.map((city, index) => (
                          <Box
                            onClick={() => setDestination(city.fullName)}
                            key={city.id}
                            sx={{
                              height: "44px",
                              width: "25%",
                              display: "flex",
                              alignItems: "center",
                              "&:hover": {
                                backgroundColor: "#e7fddc",
                                color: "#188920",
                              },

                              cursor: "pointer",

                              // color: item.currencyCode === currency ? theme.palette.customGreen.main : 'inherit',
                              // fontWeight: item.currencyCode === currency ? '600' : 'inherit',
                            }}
                          >
                            <Typography
                              variant="p"
                              sx={{
                                fontSize: "16px",
                                lineHeight: "24px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                padding: "0 8px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {city.title}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Paper>
                  )}
                </Paper>
              </Box>
            </Stack>
            <Box
           
              position="relative"
              sx={{ p: 0, minHeight: "64px", width:{md: "100%",lg:"50%"}

               }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: calender ? "120%" : "100%", // Expands Paper when calendar is active
                  position: calender ? "absolute" : "relative",
                  zIndex: calender ? "2" : "1",
                  right: "0px",
                  p: calender ? 2 : 0,
                  paddingBottom: "0px",
                  marginTop: calender ? -2 : 0,
                  minHeight: "64px",
                  boxShadow: calender ? "0 0 24px 2px rgba(0,0,0,.08)" : "none",
                  borderRadius: "16px",
                  transition: "width 0.3s ease", // Smooth transition
                }}
                onClick={handleCalender}
              >
                <Box
                  sx={{
                    alignItems: "center",
                    padding: "0px",
                    height: "64px",
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                  }}
                >
                  {calender && (
                    <Box width="15%">
                      <Button
                        disableRipple
                        onClick={() => setDateValue("")}
                        variant="outline"
                        sx={{
                          borderRdius: "4px",
                          fontWeight: "400",
                          color: theme.palette.customGreen.dark,
                          height: "48px",
                          width: "70px",
                          textTransform: "none",
                          "&:hover": {
                            backgroundColor: "#f4f4f4",
                          },
                        }}
                      >
                        Clear
                      </Button>
                    </Box>
                  )}
                  <Box
                    sx={{
                      p: 0,
                      margin: 0,
                      width: returnFlight ? "50%": "100%",
                      height: "100%",
                      borderRadius: "8px 0px 0px 8px",
                      border: depart
                        ? "2px solid #44b50c"
                        : "1px solid #dfdfdf",
                      "&:hover": {
                        border: depart
                          ? "2px solid #44b50c"
                          : "1px solid #9c9c9c",
                      },
                    }}
                  >
                    <TextField
                      onClick={() => {
                        setdepart(true);
                        setreturns(false);
                      }}
                      variant="standard"
                      placement="bottom-start"
                      size="small"
                      label="Depart"
                      value={formatDate(dateValue[0])}
                      InputProps={{
                        endAdornment: !!formatDate(dateValue[0]) && !depart && (
                          <InputAdornment position="end">
                            <IconButton
                              disableRipple
                              onClick={(event) => {
                                event.stopPropagation(); // Prevent click event from bubbling up
                                setPlace("");
                              }}
                              edge="end"
                              sx={{
                                paddingRight: "30px",
                                width: "22px",
                                position: "absolute",
                                right: "2px",
                                color: theme.palette.customGreen.dark,
                                bottom: "-2px",
                                "&:hover": { background: "transparent" },
                              }}
                            >
                              <KeyboardArrowLeftIcon
                                onClick={() => dayminus(dateValue[0])}
                                sx={{
                                  color: isToday ? "#bdbdbd" : "inherit",
                                }}
                              />
                              <KeyboardArrowRightIcon
                                onClick={() => dayadd(dateValue[0])}
                                sx={{
                                  color: isMaxRange ? "#bdbdbd" : "inherit",
                                }}
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                        readOnly: true,
                      }}
                      slotProps={{
                        inputLabel: {
                          shrink: !!formatDate(dateValue[0]),
                          sx: {
                            transform: !formatDate(dateValue[0])
                              ? "translate(0, 6px)"
                              : "", // Adjusts label positioning
                            left: 0,
                            position: "absolute",
                            color: "#767676", // Adjust color for better visibility
                          },
                        },
                      }}
                      sx={{
                        height: "100%",
                        width: "100%",
                        padding: "10px 8px 0px 20px",
                        cursor: "pointer",
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:hover:before": {
                          borderBottom: "none !important",
                        },
                        "& .MuiFormLabel-root": {
                          paddingTop: "12px",
                          paddingLeft: "24px",
                        },
                        "& .MuiInputBase-input": {
                          fontWeight: "600",
                          paddingBottom: "0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        },
                        "& .MuiInput-underline:hover:before": {
                          borderBottom: "none !important",
                        },

                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "rgba(0, 0, 0, 0.6)",
                        },

                        "& .MuiInput-root::after": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  </Box>
{returnFlight && 
                  <Box
                    sx={{
                      p: 0,
                      margin: 0,
                      width: "50%",
                      height: "100%",
                      borderRadius: "0px 8px 8px 0px",
                      border: returns
                        ? "2px solid #44b50c"
                        : "1px solid #dfdfdf",
                      "&:hover": {
                        border: returns
                          ? "2px solid #44b50c"
                          : "1px solid #9c9c9c",
                      },
                      borderLeft: returns ? "2px solid #44b50c" : "0px",
                    }}
                  >
                    <TextField
                      onClick={() => {
                        setreturns(true);
                        setdepart(false);
                      }}
                      variant="standard"
                      size="small"
                      label="Return"
                      value={formatDate(dateValue[1])}
                      slotProps={{
                        inputLabel: {
                          shrink: !!formatDate(dateValue[1]),
                          sx: {
                            transform: !formatDate(dateValue[1])
                              ? "translate(0, 6px)"
                              : "", // Adjusts label positioning
                            left: 0,
                            position: "absolute",
                            color: "#767676", // Adjust color for better visibility
                          },
                        },
                      }}
                      InputProps={{
                        endAdornment: !!formatDate(dateValue[1]) &&
                          !returns && (
                            <InputAdornment position="end">
                              <IconButton
                                disableRipple
                                onClick={(event) => {
                                  event.stopPropagation(); // Prevent click event from bubbling up
                                  setPlace("");
                                }}
                                edge="end"
                                sx={{
                                  paddingRight: "30px",
                                  width: "22px",
                                  position: "absolute",
                                  right: "2px",
                                  color: theme.palette.customGreen.dark,
                                  bottom: "-2px",
                                  "&:hover": { background: "transparent" },
                                }}
                              >
                                <KeyboardArrowLeftIcon
                                  onClick={() => dayminus(dateValue[1])}
                                  sx={{
                                    color: isMaxRange ? "#bdbdbd" : "inherit",
                                  }}
                                />
                                <KeyboardArrowRightIcon
                                  onClick={() => dayadd(dateValue[1])}
                                />
                              </IconButton>
                            </InputAdornment>
                          ),
                        readOnly: true,
                      }}
                      sx={{
                        height: "100%",
                        width: "100%",
                        padding: "10px 8px 0px 20px",
                        cursor: "pointer",
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiFormLabel-root": {
                          paddingTop: "12px",
                          paddingLeft: "24px",
                        },
                        "& .MuiInputBase-input": {
                          fontWeight: "600",
                          paddingBottom: "0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        },
                        "& .MuiInput-underline:hover:before": {
                          borderBottom: "none !important",
                        },

                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "rgba(0, 0, 0, 0.6)",
                        },

                        "& .MuiInput-root::after": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  </Box>
}
                </Box>
                {calender && (
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <Paper
                      elevation={0}
                      open={calender}
                      anchorEl={anchorCalender}
                      placement="bottom-start"
                      // style={{ width: "600px" }}
                      sx={{ border: "none" }}
                    >
                      <Paper elevation={0}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateRangeCalendar
                            value={dateValue}
                            onChange={handleDateChange}
                            shouldDisableDate={(date) =>
                              date.isBefore(today, "day")
                            }
                            minDate={today}
                          />
                        </LocalizationProvider>
                      </Paper>
                    </Paper>
                  </ClickAwayListener>
                )}
              </Paper>
            </Box>
          </Stack>
  )
}

export default FlightContent