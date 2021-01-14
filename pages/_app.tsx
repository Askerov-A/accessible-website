import '../styles/globals.css'
import React from "react";
import Header from "../components/header";
import styles from "../styles/Page.module.css";

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <div className={styles.Page}>
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
