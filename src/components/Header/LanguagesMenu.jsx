import React, { useEffect, useState } from "react";
import CurrencyFlag from "react-currency-flags";
import isoCountryCurrency from "iso-country-currency";
import { Tooltip, Paper, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CurrencyData from "./CurrencyData";

const languages = [
  { code: "EN", name: "English" },
  { code: "AR", name: "العربية" },
  { code: "DE", name: "Deutsch" },
  { code: "ES", name: "Español" },
  { code: "FA", name: "فارسی" },
  { code: "FR", name: "Français" },
  { code: "ID", name: "Bahasa Indonesia" },
  { code: "IT", name: "Italiano" },
  { code: "JA", name: "日本語" },
  { code: "KO", name: "한국어" },
  { code: "MS", name: "Bahasa Melayu" },
  { code: "NL", name: "Nederlands" },
  { code: "PL", name: "Polski" },
  { code: "PT", name: "Português" },
  { code: "RU", name: "Русский" },
  { code: "SV", name: "Svenska" },
  { code: "TH", name: "ไทย" },
  { code: "TR", name: "Türkçe" },
  { code: "VI", name: "Tiếng Việt" },
  { code: "CN", name: "简体中文" },
  { code: "HK", name: "繁體中文" },
  { code: "TW", name: "繁體中文" },
];

const LanguagesMenu = ({ onStateChange, lang }) => {
  

  const updateLang = (selected) => {
    onStateChange(selected);
  };
  const theme = useTheme();

  const [lan, setlan] = useState("");
  console.log("language code", lan);
  return (
    <Box
      sx={{
        height: "430px",
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
      {languages
      .sort((a, b) => (a.code === lang ? -1 : 1)) 
      .map((item, index) => (
        <Box
          onClick={() => {
            updateLang(item.code);
          }}
          key={index}
          sx={{
            width: "180px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            "&:hover": { backgroundColor: "#f4f4f4" },
            padding: "0px 11px",
            cursor: "pointer",
            color: item.code === lang ? theme.palette.customGreen.main : 'inherit',
                fontWeight: item.code === lang ? '500' : 'inherit',
          }}
        >
          <div style={{ marginRight: "10px", fontWeight:"600"}}>{item.code}</div>
          <div>
            <div
            style={{    overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'}}
            >
              {item.name}
            </div>
            {/* <div>{item.currencyCode}</div> */}
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default LanguagesMenu;
