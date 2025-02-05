import * as React from "react";
import "../components/i18n";
import PropTypes from "prop-types";
import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme/theme";
import "../styles/globals.css";
import '../styles/datepicker.css';
import { useState, useEffect } from "react";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [isReady, setIsReady] = useState(false);

  // Use useEffect to handle hydration, ensuring the page is fully loaded
  useEffect(() => {
    // This will run after React finishes hydration
    setIsReady(true);
  }, []); // Empty dependency array means it will run only once after the first render

  // If page is not ready, show a loading screen
  if (!isReady) {
    return (
      <div></div> // Replace this with a spinner or loading component if you prefer
    );
  }

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
  
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
