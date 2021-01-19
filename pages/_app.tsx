import '../styles/globals.css';

import Head from 'next/head';
import React from 'react';

import Header from '../components/header';
import styles from '../styles/Page.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Examples of accessibility</title>
      </Head>
      <Header />
      <div className={styles.Page}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
