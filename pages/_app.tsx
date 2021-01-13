import '../styles/globals.css'
import React from "react";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
