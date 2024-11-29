import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Link, Stack,Container } from "@mui/material";
import FlightsTab from "./FlightsTab";
import HotelsTab from "./HotelsTab";

function CustomTabPanel(props) {
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
            borderRadius: "0 8px 8px 8px",
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
export default function HeroTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
      
        height: "300px",
        borderRadius: "18px",
        overflow: "visible",
        margin: "auto",
        position: "relative",
      }}
    >
      <Box
        sx={{ width: "100%", zIndex: "4", margin: "auto", overflow: "visible" ,padding:"0px 8px"}}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "900px",
            borderRadius: "8px 8px 0 0",
            overflow: "visible",
            borderBottom: "0px",
            color: "white",
            display: "flex",
            fontSize: "15px",
            textDecoration: "none",
            "& .MuiButtonBase-root": {
              opacity: 1,
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
              overflow: "visible",
            }}
          >
            <Tab
              disableRipple
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
                        value == 0 ? "-75px -50px" : "0px -75px",
                      marginRight: 1,
                    }}
                  ></Box>
                  Flights
                </Stack>
              }
              sx={{
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(0, 0, 0, .24)",
                borderRadius: "8px 0 0 0",
              }}
              {...a11yProps(0)}
            />
            <Tab
              disableRipple
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
                      marginRight: 1,
                    }}
                  ></Box>
                  Hotels
                </Stack>
              }
              sx={{
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(0, 0, 0, .24)",
                marginRight: "4px",
                borderRadius: "0px 8px 0 0",
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
                        marginRight: 1,
                      }}
                    ></Box>
                    <strong style={{ marginRight: "4px" }}>WegoPro </strong>{" "}
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
        </Box>
        {/* first tab flights content */}
        <CustomTabPanel value={value} index={0} className="tab">
          <FlightsTab />
        </CustomTabPanel>
        
        {/* second tab hotels content */}
        <CustomTabPanel value={value} index={1}>
          Where do you want to stay?
          <HotelsTab />
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
