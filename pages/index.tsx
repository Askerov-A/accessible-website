import React from 'react';

import styles from '../styles/Home.module.css'

const MainPage: React.FC = () => {
  return (
    <main className={styles.MainPage}>
      <h1 className={styles.MainPageTitle}>WCAG 2.0 CheckLists</h1>
      <h2>LEVEL A</h2>
      <h3>1.1.1 – Non-text Content (B)</h3>
      <h3>1.2.1 – Audio-only and Video-only (Pre-recorded) (ZH)</h3>
      <h3>1.2.2 – Captions (Pre-recorded) (A)</h3>
      <h3>1.2.3 – Audio Description or Media Alternative (Pre-recorded) (B)</h3>
      <h3>1.3.1 – Info and Relationships (ZH)</h3>
      <h3>1.3.2 – Meaningful Sequence (A)</h3>
      <h3>1.3.3 – Sensory Characteristics (B)</h3>
      <h3>1.4.1 – Use of Colour (ZH)</h3>
      <h3>1.4.2 – Audio Control (A)</h3>
      <h3>2.1.1 – Keyboard (B)</h3>
      <h3>2.1.2 – No Keyboard Trap (ZH)</h3>
      <h3>2.2.1 – Timing Adjustable (A)</h3>
      <h3>2.2.2 – Pause, Stop, Hide (B)</h3>
      <h3>2.3.1 – Three Flashes or Below (ZH)</h3>
      <h3>2.4.1 – Bypass Blocks (A)</h3>
      <h3>2.4.2 – Page Titled (B)</h3>
      <h3>2.4.3 – Focus Order (ZH)</h3>
      <h3>2.4.4 – Link Purpose (In Context) (A)</h3>
      <h3>3.1.1 – Language of Page (B)</h3>
      <h3>3.2.1 – On Focus (ZH)</h3>
      <h3>3.2.2 – On Input (A)</h3>
      <h3>3.3.1 – Error Identification (B)</h3>
      <h3>3.3.2 – Labels or Instructions (ZH)</h3>
      <h3>4.1.1 – Parsing (A)</h3>
      <h3>4.1.2 – Name, Role, Value (B)</h3>
      <h2>LEVEL AA</h2>
      <h3>1.2.4 – Captions (Live) (A)</h3>
      <h3>1.2.5 – Audio Description (Pre-recorded) (B)</h3>
      <h3>1.4.3 – Contrast (Minimum) (ZH)</h3>
      <h3>1.4.4 – Resize Text (A)</h3>
      <h3>1.4.5 – Images of Text (B)</h3>
      <h3>2.4.5 – Multiple Ways (ZH)</h3>
      <h3>2.4.6 – Headings and Labels (A)</h3>
      <h3>2.4.7 – Focus Visible (B)</h3>
      <h3>3.1.2 – Language of Parts (ZH)</h3>
      <h3>3.2.3 – Consistent Navigation (A)</h3>
      <h3>3.2.4 – Consistent Identification (B)</h3>
      <h3>3.3.3 – Error Suggestion (ZH)</h3>
      <h3>3.3.4 - Error Prevention (Legal, Financial, Data) (A)</h3>
      <h2>LEVEL AAA</h2>
    </main>
  );
};

export default MainPage;
