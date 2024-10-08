import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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
          sx={{ p: 3, backgroundColor: "white", borderRadius: "0 8px 8px 8px" }}
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
    <Box sx={{ width: "500px", borderRadius: "18px" }}>
      <Box sx={{ width: "500px", position: "absolute", zIndex: "4" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "350px",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
            borderBottom: "0px",
            color: "white",
            display: "flex",
            fontSize: "15px",
            textDecoration: "none",
            "& .MuiTab-root": {
              color: "white",
              textTransform:"none !important",
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
              label="Flights"
              sx={{
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(0, 0, 0, .24)",
                borderRadius:"8px 0 0 0"
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Hotels"
              sx={{
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(0, 0, 0, .24)",
                marginRight: "4px",
                borderRadius:"0px 8px 0 0"
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
          Item One
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
