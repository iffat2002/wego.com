import React from "react";
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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
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
import TwoMonthRangePicker from "./TwoMonthRangePicker";

dayjs.extend(localizedFormat);

const TabContent = ({ returnFlight, cities, isHotels }) => {
  const theme = useTheme();
  const datePickerRef = useRef(null);
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

  const [openFromPopper, setOpenFromPopper] = useState(false);
  const [anchorElFrom, setAnchorElFrom] = useState(null);
  const [depart, setdepart] = useState(false);
  const [returns, setreturns] = useState(false);
  const [openToPopper, setOpenToPopper] = useState(false);
  const [anchorElTo, setAnchorElTo] = useState(null);
const today = dayjs().startOf("day").add(3, "day");
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

  const [place, setPlace] = useState("Lahore, Pakistan (LHE)");
  const handleTextChange = (event) => {
    setPlace(event.target.value);
  };
  const [destination, setDestination] = useState("");
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
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
    if (fromPaperRef.current && !fromPaperRef.current.contains(event.target)) {
      setfrom(false);
    }
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [to, from]);

  const [calender, setCalender] = useState(false);
  const [anchorCalender, setAnchorCalender] = useState(null);
  const handleCalender = (event) => {
    setAnchorCalender(event.currentTarget);
    setCalender(true);
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true); // Programmatically open the calendar
    }

  };
  const [dateValue, setDateValue] = useState([
    dayjs().startOf("day").add(3, "day"),
     dayjs().add(4, "day").startOf("day") 
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

  const isToday = dayjs(dateValue[0])?.isSame(dayjs(today), "day");
  const isMaxRange = dayjs(dateValue[1])?.isSame(dayjs(dateValue[0]), "day");
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
    setCalender(false);
    console.log(newValue);
  };
  console.log("calender", calender)
console.log("date value",dateValue)
const formatDate = (date) => (date ? dayjs(date).format("ddd, DD MMM YYYY") : "");


const handleClickAway = (event) => {
  // Check if the calendar is open and if the event target is outside the calendar
  if (anchorCalender && !anchorCalender.contains(event.target)) {
    // Close the calendar and reset other states
    setreturns(false);
    setdepart(false);
    setCalender(false);
  }
};


  function PopperContent() {
    return (
      <Paper
        onClick={(event) => {
          event.stopPropagation();
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
          {cities?.map((city, index) => (
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
    );
  }
  const [booking, setBooking] = useState(false);
  const [anchorbooking, setAnchorbooking] = useState(null);

  const handleBooking = (event) => {
    setAnchorbooking(event.currentTarget);
    setBooking((previousOpen) => !previousOpen);
  };
  const [rooms, setRooms] = useState([
    { id: 1, adults: 1, children: 0, childrenAges: [] },
  ]);
  const roombooking = [
    {
      title: "Adults",
      text: ">17 Years",
      position: "-75px 0",
      basic: 1,
    },
    {
      title: "Children",
      basic: 0,
      text: "≤17 Years",
      position: "0 -50px",
    },
  ];

  const getPassengerCount = () => {
    const total = room + adult + child;
    if (room === 0 && child === 0 && adult > 1) {
      return `${total} Adults`;
    } else if (room === 0 && child === 0 && adult === 1) {
      return `${total} Adult`;
    } else {
      return `${total} Passengers`;
    }
  };

  const adultcount = rooms.reduce((sum, room) => sum + room.adults, 0);
  const childcount = rooms.reduce((sum, room) => sum + room.children, 0);
  //const totalguests = rooms.reduce((sum, room) => sum + room.adults, 0) +  rooms.reduce((sum, room) => sum + room.children, 0);
  const roomCount =
    rooms.length > 0 ? Math.max(...rooms.map((room) => room.id)) : 0;
  const labelvalue = () => {
    if (childcount > 0) {
      return `${adultcount + childcount} Guest${
        adultcount + childcount > 1 ? "s" : ""
      } in ${roomCount} ${roomCount > 1 ? "Rooms" : "Room"}`;
    } else {
      return `${adultcount} ${
        adultcount > 1 && childcount === 0 ? "Adults" : "Adult"
      } in ${roomCount} ${roomCount > 1 ? "Rooms" : "Room"}`;
    }
  };

  const handleAddRoom = () => {
    setRooms((prevRooms) => [
      ...prevRooms,
      { id: prevRooms.length + 1, adults: 1, children: 0, childrenAges: [] },
    ]);
  };

  const handleRemoveRoom = (id) => {
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== id));
  };

  const handleAdultChange = (id, type) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id
          ? {
              ...room,
              adults:
                type === "increment"
                  ? Math.min(room.adults + 1, 9)
                  : Math.max(room.adults - 1, 1),
            }
          : room
      )
    );
  };

  const handleChildrenChange = (id, type) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id
          ? {
              ...room,
              children:
                type === "increment"
                  ? Math.min(room.children + 1, 9)
                  : Math.max(room.children - 1, 0),
              childrenAges:
                type === "increment"
                  ? [...room.childrenAges, 12]
                  : room.childrenAges.slice(0, -1),
            }
          : room
      )
    );
  };

  const handleAgeChange = (roomId, index, value) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? {
              ...room,
              childrenAges: room.childrenAges.map((age, i) =>
                i === index ? parseInt(value, 10) : age
              ),
            }
          : room
      )
    );
  };
  ////
  return (
    <Stack
      mt={2}
      sx={{
        alignItems: "center",
        width: "100%",
        gap: { lg: "0 8px", md: "8px 0", sm:"8px 0" },
        flexDirection: {
          md: "col",
          sm:"col",
          xs: "col",
          lg: "row",
        },
      }}
    >
      <Stack
        direction="row"
        position="relative"
        sx={{
          gap: "0 8px",
          justifyContent: "center",
          alignItems: "center",
          width: {
            lg: returnFlight ? "50%" : "100%",
            md: returnFlight ? "100%" : "100%",
            sm: returnFlight ? "100%" : "100%",
          },
        }}
      >
        {isHotels ? (
          <Box
            sx={{
              p: 2,
              minHeight: "64px",
              padding: "0px",
              position: "relative",
              width: "100%",
            }}
          >
            <Paper
              ref={fromPaperRef}
              elevation={0}
              sx={{
                width: from ? "120%" : "100%",
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
                  p: 0,
                  margin: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  border: from ? "1px solid #44b50c" : "1px solid #dfdfdf",
                  "&:hover": {
                    border: from ? "1px solid #44b50c" : "1px solid #9c9c9c",
                  },
                }}
              >
                <TextField
                  onClick={handleFromClick}
                  variant="standard"
                  placement="bottom-start"
                  size="small"
                  label={
                    from
                      ? "Search By City, District, Region, Hotel Name"
                      : "Destination"
                  }
                  value={place}
                  onChange={handleTextChange}
                  slotProps={{
                    inputLabel: {
                      shrink: !!place,
                      sx: {
                        transform: !place ? "translate(0, 6px)" : "",
                        left: 0,
                        position: "absolute",
                        color: "#767676",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: from && (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={(event) => {
                            event.stopPropagation();
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
                    "& .MuiInput-input": {},
                    "& .MuiInputBase-input": {
                      fontWeight: "600",
                      paddingBottom: "0px",
                      cursor: "pointer",
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
              {from && <PopperContent />}
            </Paper>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                p: 2,
                minHeight: "64px",
                padding: "0px",
                position: "relative",
                width: "50%",
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
                      border: from ? "1px solid #44b50c" : "1px solid #dfdfdf",
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
                            transform: !place ? "translate(0, 6px)" : "",
                            left: 0,
                            position: "absolute",
                            color: "#767676",
                          },
                        },
                      }}
                      InputProps={{
                        endAdornment: from && (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={(event) => {
                                event.stopPropagation();
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
                          // paddingLeft: "5px",
                        },
                        "& .MuiInputBase-input": {
                          fontWeight: "600",
                          paddingBottom: "0px",
                          cursor: "pointer",
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
                {from && <PopperContent />}
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
                  width: to ? "200%" : "100%",
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
                        border: to ? "1px solid #44b50c" : "1px solid #9c9c9c",
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
                              : "",
                            left: 0,
                            position: "absolute",
                            color: "#767676",
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

                        "& .MuiInputBase-input": {
                          fontWeight: "600",
                          paddingBottom: "0px",
                          textOverflow: "ellipsis",
                          cursor: "pointer",
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
          </>
        )}
      </Stack>
      <Box
        position="relative"
        sx={{ p: 0, minHeight: "64px", width: { md: "100%",sm:"100%", lg: "50%" } }}
      >
        <Paper
          elevation={0}
          sx={{
            width: isHotels && calender ? "150%" : calender ? "120%" : "100%",
            position: calender ? "absolute" : "relative",
            zIndex: calender ? "2" : "1",
            right: isHotels ? "inherit" : "0px",
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
            {calender && !isHotels && (
              <Box width="15%">
                <Button
                  disableRipple
                  onClick={() => setDateValue(["",""])}
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
                width: returnFlight ? "50%" : "100%",
                height: "100%",
                borderRadius: "8px 0px 0px 8px",
                border: depart ? "2px solid #44b50c" : "1px solid #dfdfdf",
                "&:hover": {
                  border: depart ? "2px solid #44b50c" : "1px solid #9c9c9c",
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
                label={isHotels ? "Check In" : "Depart"}
                value={formatDate(dateValue[0])}
                InputProps={{
                  ...(!isHotels && {
                    endAdornment: !!formatDate(dateValue[0]) && !depart && (
                      <InputAdornment position="end">
                        <IconButton
                          disableRipple
                          onClick={(event) => {
                            event.stopPropagation();
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
                  }),

                  readOnly: true,
                }}
                slotProps={{
                  inputLabel: {
                    shrink: !!formatDate(dateValue[0]),
                    sx: {
                      transform: !formatDate(dateValue[0])
                        ? "translate(0, 6px)"
                        : "",
                      left: 0,
                      position: "absolute",
                      color: "#767676",
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
                    cursor: "pointer",
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
            {returnFlight && (
              <Box
                sx={{
                  p: 0,
                  margin: 0,
                  width: "50%",
                  height: "100%",
                  borderRadius: "0px 8px 8px 0px",
                  border: returns ? "2px solid #44b50c" : "1px solid #dfdfdf",
                  "&:hover": {
                    border: returns ? "2px solid #44b50c" : "1px solid #9c9c9c",
                  },
                  borderLeft: returns ? "2px solid #44b50c" : "1px solid transparent",
                }}
              >
                <TextField
                  onClick={() => {
                    setreturns(true);
                    setdepart(false);
                  }}
                  variant="standard"
                  size="small"
                  label={isHotels ? "Check Out" : "Return"}
                  value={formatDate(dateValue[1])}
                  slotProps={{
                    inputLabel: {
                      shrink: !!formatDate(dateValue[1]),
                      sx: {
                        transform: !formatDate(dateValue[1])
                          ? "translate(0, 6px)"
                          : "",
                        left: 0,
                        position: "absolute",
                        color: "#767676",
                      },
                    },
                  }}
                  InputProps={{
                    ...(!isHotels && {
                      endAdornment: !!formatDate(dateValue[1]) && !returns && (
                        <InputAdornment position="end">
                          <IconButton
                            disableRipple
                            onClick={(event) => {
                              event.stopPropagation();
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
                    }),
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
                      cursor: "pointer",
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
            )}
          </Box>
          {calender && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Paper
                elevation={0}
                open={calender}
                anchorEl={anchorCalender}
                placement="bottom-start"
                sx={{ border: "none" }}
              >
                <Paper elevation={0}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TwoMonthRangePicker minDate={today}  ref={datePickerRef}  calender={calender} setCalender={setCalender} value={dateValue} handleChange={handleDateChange}/>
                  </LocalizationProvider>
                </Paper>
              </Paper>
            </ClickAwayListener>
          )}
        </Paper>
      </Box>
      {isHotels && (
        <Box position="relative" sx={{ width: { md: "100%",sm: "100%", lg: "25%" } }}>
          <Box
            position="relative"
            onClick={handleBooking}
            sx={{
              p: 1,
              pl: 2,
              minHeight: "64px",
              borderRadius: "8px",
              border: "1px solid #dfdfdf",
              "&:hover": {
                border: "1px solid #9c9c9c",
              },
              //width: { md: "100%", lg: "25%" },
            }}
          >
            <TextField
              variant="standard"
              placement="bottom-start"
              size="small"
              label="Guests and Rooms"
              value={labelvalue()}
              InputProps={{
                readOnly: true,
              }}
              sx={{
                cursor: "pointer",
                "& .MuiInput-underline:before": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-input": {
                  fontWeight: "600",
                  cursor: "pointer",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "rgba(0, 0, 0, 0.6)",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "none !important",
                },
                "& .MuiInput-root::after": {
                  borderBottom: "none",
                },
              }}
            />
          </Box>
          {booking && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Paper
                elevation={1}
                anchorEl={anchorbooking}
                sx={{
                  width: "500px",
                  position: "absolute",
                  top: "-10px",
                  borderRadius: "12px",
                  right: "0px",
                  zIndex: "5",
                  "& .MuiPaper-root": {
                    borderRadius: "15px",
                    padding: "0px 0px",
                  },
                }}
              >
                <Paper sx={{ borderRadius: "0px" }}>
                  <Box>
                    {rooms.map((room, index) => (
                      <Card key={room.id} elevation={0}>
                        <CardContent sx={{ padding: "16px 24px" }}>
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 1,
                              fontSize: "17px",
                              fontWeight: "600",
                              display: "block",
                            }}
                          >
                            Room {room.id}
                            {room.id !== 1 && (
                              <Button
                                variant="text"
                                color="error"
                                onClick={() => handleRemoveRoom(room.id)}
                                sx={{
                                  textTransform: "none",
                                  float: "right",
                                  padding: "0px",
                                  "&:hover": {
                                    backgroundColor: "transparent",
                                    textDecoration: "underline",
                                  },
                                }}
                              >
                                Remove
                              </Button>
                            )}
                          </Typography>
                          <Stack direction="row" justifyContent="space-between">
                            {roombooking.map((option) => (
                              <Stack
                                direction="row"
                                sx={{
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                                key={option.title}
                                value={option.value}
                              >
                                <Stack
                                  direction="row"
                                  sx={{ alignItems: "center" }}
                                >
                                  <Box
                                    sx={{
                                      backgroundImage: "url(/icons.webp)",
                                      width: "24px",
                                      height: "24px",
                                      backgroundRepeat: "no-repeat",
                                      backgroundSize: "99px 149px",
                                      backgroundPosition: option.position,
                                      marginRight: 1,
                                      p: 0,
                                    }}
                                  ></Box>

                                  <Typography
                                    variant="text"
                                    sx={{
                                      textTransform: "none",
                                      color: "black",
                                    }}
                                  >
                                    {option.title}
                                    <span
                                      style={{
                                        color: "gray",
                                        display: "block",
                                        fontSize: "small",
                                      }}
                                    >
                                      {option.text}
                                    </span>
                                  </Typography>
                                </Stack>
                                <Stack
                                  direction="row"
                                  sx={{ gap: "0 12px", marginLeft: "40px" }}
                                >
                                  <IconButton
                                    disableRipple
                                    sx={{
                                      borderRadius: "4px",
                                      width: "22px",
                                      height: "22px",

                                      backgroundColor:
                                        room.adults == option.basic
                                          ? "#bdbdbd"
                                          : theme.palette.customGreen.main,

                                      "&:hover": {
                                        backgroundColor:
                                          room.adults == option.basic
                                            ? "#bdbdbd"
                                            : theme.palette.customGreen.dark,
                                      },
                                    }}
                                  >
                                    <RemoveIcon
                                      onClick={() => {
                                        option.title === "Adults"
                                          ? handleAdultChange(
                                              room.id,
                                              "decrement"
                                            )
                                          : handleChildrenChange(
                                              room.id,
                                              "decrement"
                                            );
                                      }}
                                      disable
                                      sx={{
                                        outline: "none",
                                        width: "15px",
                                        cursor: "pointer",
                                        color: "white",
                                      }}
                                    />
                                  </IconButton>
                                  {option.title === "Adults"
                                    ? room.adults
                                    : room.children}

                                  <IconButton
                                    disableRipple
                                    sx={{
                                      borderRadius: "4px",
                                      width: "22px",
                                      height: "22px",
                                      backgroundColor:
                                        room.adults >= 1
                                          ? theme.palette.customGreen.main
                                          : "#bdbdbd",

                                      "&:hover": {
                                        backgroundColor:
                                          room.adults >= 1
                                            ? theme.palette.customGreen.dark
                                            : "none",
                                      },
                                    }}
                                  >
                                    <AddIcon
                                      color="primary"
                                      onClick={() => {
                                        option.title === "Adults"
                                          ? handleAdultChange(
                                              room.id,
                                              "increment"
                                            )
                                          : handleChildrenChange(
                                              room.id,
                                              "increment"
                                            );
                                      }}
                                      sx={{
                                        width: "15px",
                                        cursor: "pointer",
                                        color: "white",
                                      }}
                                    />
                                  </IconButton>
                                </Stack>
                              </Stack>
                            ))}
                          </Stack>
                          {room.children > 0 && (
                            <Box>
                              <Typography
                                variant="subtitle1"
                                sx={{ mb: 1, mt: 3 }}
                              >
                                Age of Children
                              </Typography>
                              {room.childrenAges.map((age, index) => (
                                <Select
                                  key={index}
                                  value={age}
                                  onChange={(e) =>
                                    handleAgeChange(
                                      room.id,
                                      index,
                                      e.target.value
                                    )
                                  }
                                  native
                                  sx={{
                                    height: "48px",
                                    width: "68px",
                                    color: "black",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 1,
                                    "& option": {
                                      padding: " !important",
                                      fontSize: "small",
                                      color: "black",
                                      textAlign: "left",
                                      outline: "1px",
                                    },
                                    "& .MuiNativeSelect-icon": {
                                      color: "black",
                                      fontSize: "28px",
                                    },
                                    "&:hover": {},
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                      {
                                        border: "1px solid #D2D2D2",
                                      },
                                    "&:hover .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor: "gray",
                                      },
                                  }}
                                >
                                  <option value="<1">&lt;1</option>
                                  {[...Array(17).keys()].map((num) => (
                                    <option key={num + 1} value={num + 1}>
                                      {num + 1}
                                    </option>
                                  ))}
                                </Select>
                              ))}
                              <Typography
                                variant="text"
                                sx={{
                                  fontSize: "small",
                                  color: "gray",
                                  display: "block",
                                  my: 1,
                                  paddingRight: 1,
                                }}
                              >
                                We preset your children's ages to 12 years old.
                                You might get a better price if you enter their
                                actual age.
                              </Typography>
                            </Box>
                          )}
                        </CardContent>
                        <Divider
                          sx={{
                            borderRadius: 0,
                            width: "100%",
                            zIndex: 10,
                            position: "absolute",
                          }}
                        />
                      </Card>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      justifyContent: "space-between",
                      padding: "8px",
                      display: "flex",
                    }}
                  >
                    <Button
                      disableRipple
                      variant="standard"
                      startIcon={
                        <AddCircleOutlineIcon
                          sx={{
                            width: "28px",
                            height: "24px",
                          }}
                        />
                      }
                      sx={{
                        fontWeight: "400",
                        padding: "0 12px",
                        "&:hover": {
                          background: theme.palette.customTransparent.lightgray,
                        },

                        height: "48px",
                        gap: "8px 0px",
                        borderRadius: "8px",
                        color: "inherit",
                        justifyContent: "center",
                        textTransform: "none",
                        alignItems: "center",

                        color: theme.palette.customGreen.main,
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                      onClick={handleAddRoom}
                    >
                      Add Room
                    </Button>
                    <Button
                      disableRipple
                      size="small"
                      variant="text"
                      onClick={() => setBooking(false)}
                      sx={{
                        textTransform: "none",
                        color: theme.palette.customGreen.main,
                        fontWeight: "600",
                        fontSize: "14px",
                        padding: "0 12px",
                        "&:hover": {
                          background: theme.palette.customTransparent.lightgray,
                        },
                      }}
                    >
                      Apply
                    </Button>
                  </Box>
                </Paper>
              </Paper>
            </ClickAwayListener>
          )}
        </Box>
      )}
    </Stack>
  );
};

export default TabContent;
