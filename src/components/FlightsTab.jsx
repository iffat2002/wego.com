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
const FlightsTab = () => {
  const theme = useTheme();
  const fromPaperRef = useRef(null);
  const toPaperRef = useRef(null);
  const [booking, setBooking] = useState(false);
  const [anchorbooking, setAnchorbooking] = useState(null);
  const btns = ["One-way", "Round-trip", "Multi-city"];
  const [from, setfrom] = useState(false);
  const [to, setTo] = useState(false);
  const [activeBtn, setActiveBtn] = useState("One-way");
  const [room, setRoom] = useState(0);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const roombooking = [
    {
      title: "Adults",
      value: adult,
      text: ">12 Years",
      position: "-75px 0",
      add: "addAdult",
      sub: "subAdult",
      state: { adult },
    },
    {
      title: "Children",
      value: child,
      text: "2-12 Years",
      position: "0 -50px",
      add: "addChild",
      sub: "subChild",
      state: { child },
    },
    {
      title: "Infants",
      value: room,
      text: "<2 Years",
      position: "-25px -100px",
      add: "addRoom",
      sub: "subRoom",
    },
  ];

  const handleRooms = (e) => {
    if (e === "addRoom" && room < 10) {
      setRoom(room + 1);
    } else if (e === "subRoom" && room > 1) {
      setRoom(room - 1);
    } else if (e === "addAdult") {
      setAdult(adult + 1);
    } else if (e === "subAdult" && adult > 1) {
      setAdult(adult - 1);
    } else if (e === "addChild") {
      setChild(child + 1);
    } else if (e === "subChild" && child > 0) {
      setChild(child - 1);
    }
  };
  
  const getPassengerCount = () => {
    const total = room + adult + child;
    if(room === 0 && child === 0 && adult > 1){
      return `${total} Adults`
    } else if(room === 0 && child === 0 && adult === 1){
 return `${total} Adult`
    } else{
       return `${total} Passengers`
    }
   
  };
  const BtnClick = (e) => {
    setActiveBtn(e);
  };

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
  // Add event listener to detect outside clicks when either "From" or "To" Paper is open
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

  const isToday = dateValue[0].isSame(today, "day");
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
   const [Class, setclass] = useState('');
   const classes = [
    "Economy", "Premium Economy","Business Class","First Class"
    
   ]
  const handleBooking = (event) => {
    setAnchorbooking(event.currentTarget);
    setBooking((previousOpen) => !previousOpen);
  };
const handleClass= (event) => {
    setclass(event.target.value);
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState({
    mastercard: false,
    visa: true,
    easypaisa: true,
    amex: true,
    bank: false,
    diners: true,
    paypal: false,
    unionpay: false,
  });
  const [showMore, setShowMore] = useState(false); 

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };
  const toggleShowMore = () => {
    setShowMore((prev) => !prev); // Toggle between show more and show less
  };

  const open = Boolean(anchorEl);
  const id = open ? 'payment-menu-popover' : undefined;

  const labelStyles = {
   "& .MuiFormControlLabel-label":{
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
   maxWidth:"129px"}
  };

  return (
    <Box>
      <Stack direction="row" height="40px" gap="7px">
        {btns.map((btn) => (
          <Box
            onClick={() => BtnClick(btn)}
            key={btn}
            variant="contained"
            sx={{
              backgroundColor: "#f4f4f4 !important",
              borderRadius: "100px",
              fontSize: "16px",
              color: "black",
              fontWeight: "400",
              lineHeight: "24px",
              padding: "0 16px",
              display: "flex",
              alignItems: "center",
              textTransform: "none",
              cursor: "pointer",
              minWidth: "100px",
              color: activeBtn === btn ? "#188920" : "inherit",
              backgroundColor: activeBtn === btn ? "#e7fddc" : "#f4f4f4 ",
              "&  .MuiButton:hover": {
                color: "red !important",
              },
            }}
          >
            {btn}
          </Box>
        ))}
      </Stack>
      {activeBtn === "One-way" && (
        <Box>
          <Stack direction="row" mt={2} sx={{ gap: "0 8px" }}>
            <Stack
              width="50%"
              direction="row"
              position="relative"
              sx={{
                gap: "0 8px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  ref={fromPaperRef}
                  elevation={0}
                  sx={{
                    width: from ? "220%" : "100%",
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
                    width: to ? "220%" : "100%",
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
              width="50%"
              position="relative"
              sx={{ p: 2, minHeight: "64px" }}
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
                      width: "50%",
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
        </Box>
      )}

      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Box>
          <FormControlLabel
            sx={{ "& .MuiTypography-root": { fontSize: "1.1rem" } }}
            control={
              <Checkbox
                sx={{
                  color: "transparent",
                  padding: "0px !important",
                  border: ".125rem solid #9c9c9c",
                  borderRadius: "2px",
                  transition: "all 225ms cubic-bezier(.4,0,.2,1) 0ms",
                  height: "24px",
                  width: "24px",
                  marginRight: "10px",
                  "& .MuiTypography-root": { fontSize: "3rem" },

                  "& .MuiSvgIcon-root": { fontSize: 32 },
                  "&.Mui-checked": {
                    color: theme.palette.customGreen.main,
                  },
                }}
              />
            }
            label="Direct flight only"
          />
        </Box>
        <Stack direction="row" sx={{    fontSize: "16px",
    fontWeight: "400", alignItems:"center", position:"relative"}}>
          <Button
          disableRipple
            variant="text"
            onClick={handleBooking}
            sx={{ textTransform: "none", alignItems: "center",fontWeight:"400", fontSize:"16px", color: "inherit",  "&:hover":{
              background:"none"
              } }}
            endIcon={
              <ArrowDropDownIcon
                sx={{
                  width: "28px",
                  height: "29px",
                
                }}
              />
            }
          >
           {getPassengerCount()}
          </Button>
         <FormControl variant="standard" sx={{ m: 1, minWidth: "200", padding:"0 12px",  "&:hover":{background:theme.palette.customTransparent.lightgray},fontSize:"inherit", height:"48px",gap: "8px 0px", borderRadius:"8px", justifyContent:"center"  }}>
          <Select
          
          disableUnderline
          value={Class || "Economy"}
          onChange={handleClass}
          displayEmpty
            id="demo-simple-select-standard"
          inputProps={{ 'aria-label': 'Without label' }}
        
          sx={{
            "& .MuiSelect-icon": {
              fontSize: 28, 
              color:"black"
            },
            fontSize:"16px",
            "& .MuiInput-input":{
            marginRight:"8px"
            },
           
            
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius:"16px", 
             
                "& .MuiMenuItem-root.Mui-selected": {
                  backgroundColor: "transparent", 
                  color: theme.palette.customGreen.dark,
                  "&:hover": {
                    backgroundColor: "transparent", // Keep yellow on hover when selected
                  },
              },
             
          },
             
            },
          }}
         
        >
          {classes.map((classOption)=>(
            <MenuItem key={classOption} value={classOption} sx={{padding:"10px 24px",}}>
            {classOption}
          </MenuItem>
          ))}
        </Select>
        </FormControl>
        <Button variant="contained" onClick={handleButtonClick}>
        Open Payment Menu
      </Button>
   
        </Stack>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{padding:"24px 24px 18px", width:"400px"}} >
          <Typography variant="body2" color="textSecondary">
            By Selecting One Or More (Max 10) Payment Types, Prices On Wego Will Include Applicable Minimum Payment Fee. Please Note That Not All Providers Support All Payment Types.
          </Typography>
          <Grid container spacing={1} mt={1}>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.mastercard}
                    onChange={handleChange}
                    name="mastercard"
                  />
                }
                label="MasterCard Credit"
                sx={labelStyles}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.visa}
                    onChange={handleChange}
                    name="visa"
                  />
                }
                label="Visa Credit"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.easypaisa}
                    onChange={handleChange}
                    name="easypaisa"
                  />
                }
                label="Easypaisa"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.amex}
                    onChange={handleChange}
                    name="amex"
                  />
                }
                label="American Express"
                sx={labelStyles}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.bank}
                    onChange={handleChange}
                    name="bank"
                  />
                }
                label="Bank Transfer"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.diners}
                    onChange={handleChange}
                    name="diners"
                  />
                }
                label="Diners Club"
              />
            </Grid>
            {showMore && (
              <>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.paypal}
                        onChange={handleChange}
                        name="paypal"
                      />
                    }
                    label="PayPal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.unionpay}
                        onChange={handleChange}
                        name="unionpay"
                      />
                    }
                    label="UnionPay"
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Typography
            variant="body2"
            color="primary"
            mt={1}
            onClick={toggleShowMore}
            style={{ cursor: 'pointer' }}
          >
            {showMore ? '- Show Less' : '+ Show More'}
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={1}>
            Tips: To Find Popular Payment Types, You Can Change Your "Country" Setting (Located On Top-Right Menu).
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button color="success" onClick={handleClose}>
              Apply
            </Button>
          </Box>
        </Box>
      </Popover>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Popper
            open={booking}
            anchorEl={anchorbooking}
            placement="bottom-start"
            sx={{ width: "245px",zIndex: "5", "& .MuiPaper-root":{
              borderRadius:"15px",
              padding:"10px 0px"
            } }}
          >
            {" "}
            <Card>
              <CardContent sx={{paddingBottom:"0px"}}>
                {roombooking.map((option) => (
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                      padding: "2px",
                    }}
                    key={option.title}
                    value={option.value}
                  >
                    <Stack direction="row" sx={{alignItems: "center"}}>
                     <Box sx={{backgroundImage: 'url(/icons.webp)', width:"24px", height:"24px", backgroundRepeat: 'no-repeat',
    backgroundSize: '99px 149px' , backgroundPosition: option.position, marginRight:1, p:0}}></Box>
              
                    <Typography
                      variant="text"
                      sx={{
                        fontSize: "smaller",
                        textTransform: "none",
                        color: "black",
                      }}
                    >
                      {option.title}
                      <span style={{ color: "gray", display: "block" }}>
                        {option.text}
                      </span>
                    </Typography>
                    </Stack>
                    <Stack direction="row" sx={{  gap: "0 12px" }}>
                      <IconButton
                        disableRipple
                        sx={{
                          borderRadius: "4px",
                          width: "22px",
                          height: "22px",
                          backgroundColor:
                            option.value === 1
                              ? "#bdbdbd"
                              : theme.palette.customGreen.main,

                          "&:hover": {
                            backgroundColor:
                              option.value === 1
                                ? "#bdbdbd"
                                : theme.palette.customGreen.dark,
                          },
                        }}
                      >
                        <RemoveIcon
                          onClick={() => handleRooms(option.sub)}
                          disable
                          sx={{
                            outline: "none",
                            width: "15px",
                            cursor: "pointer",
                            color: "white", // Default background color or gray if disabled

                            // Adjust padding to ensure the icon fits well inside the circle
                          }}
                        />
                      </IconButton>

                      {option.value}
                      <IconButton
                      disableRipple
                        sx={{
                          borderRadius: "4px",
                          width: "22px",
                          height: "22px",
                          backgroundColor:
                            option.value < 9
                              ? theme.palette.customGreen.main
                              : "#bdbdbd",
                          
                          "&:hover": {
                                backgroundColor:
                                  option.value < 9
                                    ? theme.palette.customGreen.dark
                                    : "none"
                              },
                        }}
                      >
                        <AddIcon
                          color="primary"
                          onClick={() => handleRooms(option.add)}
                          sx={{
                            // Adjust size as needed
                            width: "15px",
                            cursor: "pointer",
                            color: "white",

                            // Adjust padding to ensure the icon fits well inside the circle
                          }}
                        />
                      </IconButton>
                    </Stack>
                  </Stack>
                ))}
                  <Divider/>
              </CardContent>
            
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  variant="text"
                  onClick={() => setBooking(false)}
                  sx={{ textTransform:"none", color: theme.palette.customGreen.main, fontWeight:"600", fontSize:"14px", "&:hover":{background:"none"}}}
                >
                  Apply
                </Button>
              </CardActions>
            </Card>
          </Popper>
        </ClickAwayListener>
      </Stack>
    </Box>
  );
};

export default FlightsTab;
