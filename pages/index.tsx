import React from 'react';
import styles from '../styles/Home.module.css'

const MainPage: React.FC = () => {
  return <main className={styles.MainPage}>
    <h1 className={styles.MainPageTitle}>Main Page</h1>
    <p className={styles.MainPageContent}>
      Lorem Ipsum
    </p>
  </main>;
}

export default MainPage;
