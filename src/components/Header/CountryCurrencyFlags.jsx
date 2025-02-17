import CurrencyFlag from "react-currency-flags";
import { useState, useEffect } from "react";
import isoCountryCurrency from "iso-country-currency";
import { Tooltip, Paper, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CurrencyData from "./CurrencyData"
const CountryCurrencyFlags = ({onStateChange, flag}) => {
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
        const lan =  countryObj ? countryObj.language :'';
        return {
          countryName,
          currencyCode,
          currencyFullName,
          lan
        };
      });

    // Store the data in the state
    setCountries(countryCurrencyArray);
  }, []);

  //  console.log("currency name", currencyCode)

const [lan, setlan] = useState("")
console.log("language code", lan)
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
        paddingBottom:"30px"
      }}
    >
      {countries
      .sort((a, b) => (a.currencyCode === flag ? -1 : 1)) 
      .map((item, index) => (
        <Box   onClick={()=>{updateState(item)}} 
          key={index}
          sx={{
            width: "150px",
            height: "44px",
            display: "flex",
             WebkitTapHighlightColor: "transparent",
            alignItems: "center",
            marginRight: "30px",
            "&:hover": { backgroundColor: {lg: "#f4f4f4", md:"#f4f4f4", sm:"#f4f4f4", xs:"transparent"} },
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
                color: item.currencyCode === flag ? theme.palette.customGreen.main : 'inherit',
                fontWeight: item.currencyCode === flag ? '500' : 'inherit',
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
