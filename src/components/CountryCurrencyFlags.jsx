import React, { useEffect, useState } from "react";
import CurrencyFlag from "react-currency-flags";
import isoCountryCurrency from "iso-country-currency";
import { Tooltip, Paper, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CurrencyData from "./CurrencyData"
const CountryCurrencyFlags = ({onStateChange}) => {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState([]);
  const updateState = (selected) => {
    onStateChange(selected); // Notify parent about the state change
};
  const theme = useTheme();

  useEffect(() => {
    // Fetch all ISO country codes
    const isoCodes = isoCountryCurrency.getAllISOCodes();
   console.log("isocodes", isoCodes)

    // Create an array to hold country name and currency info
    const countryCurrencyArray = isoCodes
    .filter((code) => CurrencyData.some((country) => country.country === code.countryName))
      .map((code) => {
        const countryObj = CurrencyData.find((country) => country.country === code.countryName);
        const countryName = code.countryName;
        const currencyCode = code.currency;
        const currencyFullName = countryObj ? countryObj.currency : '';
        return {
          countryName,
          currencyCode,
          currencyFullName,
        };
      });

    // Store the data in the state
    setCountries(countryCurrencyArray);
  }, []);
  console.log("country name", selected)
  //  console.log("currency name", currencyCode)


  return (
    <Box
      sx={{
        height: "490px",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar": {
          width: "8px",
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "lightgray",
          borderRadius: "15px",
        },
        padding: "11px 0px",
      }}
    >
      {countries.map((item, index) => (
        <Box  onClick={()=>updateState(item.currencyCode)} 
          key={index}
          sx={{
            width: "150px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            marginRight: "30px",
            "&:hover": { backgroundColor: "#f4f4f4" },
            padding: "0px 11px",
            cursor: "pointer",
          }}
       
        >
          <CurrencyFlag
            currency={item.currencyCode}
            width="18"
            height="12"
            style={{ marginRight: "10px", boxShadow: "0 0 0 1px #dcdcdc" }}
          />
          <div>
            <div
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "96px", // Adjust this width as needed
              }}
            >
              {item.countryName}
            </div>
            {/* <div>{item.currencyCode}</div> */}
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default CountryCurrencyFlags;
