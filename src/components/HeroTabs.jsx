import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Box, Stack} from "@mui/material";
import FlightsTab from "./FlightsTab";

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
          sx={{ p: 3, backgroundColor: "white", borderRadius: "0 8px 8px 8px", boxShadow:"0 0 24px 2px rgba(0,0,0,.2)"  }}
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

export default function HeroTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: "84%",height:"300px" ,borderRadius: "18px", margin:"auto", position:"relative" }}>
      <Box sx={{ width: "100%", zIndex: "4", margin:"auto" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "900px",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
            borderBottom: "0px",
            color: "white",
            display: "flex",
            fontSize: "15px",
            textDecoration: "none",
         
          
            "& .MuiTab-root": {
              color: "white",
              height:"56px",
              textTransform: "none !important",
              padding:"0 2rem",
              lineHeight: '1.6',
              fontSize:"15px"
            },

            "& .Mui-selected": {
              color: "#1d1d1d !important",
              background: "#fff",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label={
                <Stack direction='row'>
                <Box sx={{backgroundImage: 'url(/icons.webp)', width:"24px", height:"24px", backgroundRepeat: 'no-repeat',
    backgroundSize: '99px 149px' , backgroundPosition:'-75px -50px', marginRight:1}}></Box>
              
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
              label="Hotels"
              sx={{
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(0, 0, 0, .24)",
                marginRight: "4px",
                borderRadius: "0px 8px 0 0",
              }}
              {...a11yProps(1)}
            />
            <Tab
              label="Item Three"
              sx={{
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(0, 0, 0, .24)",
                borderRadius: "8px 8px 0 0",
              }}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} className="tab">
         <FlightsTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
