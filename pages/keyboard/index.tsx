import React from "react";
import styles from "../../styles/KeyboardPage.module.css";

/*

      MouseEvent    KeyEvent

      mousedown	    keydown
      mouseup	      keyup
      click	        keypress
      mouseover	    focus
      mouseout	    blur

  Avoid outline:0 or outline:none
  or other styles that remove or limit visibility of keyboard focus indicators.

  Instructions for testing keyboad accessibilityhttps://webaim.org/techniques/keyboard/

*/
const KeyboardPage: React.FC = () => {
  const onMenuOver = (): void => {
    console.log("on menu over ");
  };
  const onMenuOut = (): void => {
    console.log("on menu out ");
  };

  const onImgBtnClick = (): void => {
    console.log("on menu out ");
  };
  return (
    <main className={styles.KeyboardPage}>
      <div
        onMouseOver={onMenuOver}
        onFocus={onMenuOver}
        onMouseOut={onMenuOut}
        onBlur={onMenuOut}
        tabIndex={0} // You may need to use tabindex="0" to ensure an element can receive keyboard focus
      >
        <img id="menu" src="#" alt="Menu" />
      </div>
      <div>
        <img
          onClick={onImgBtnClick}
          onKeyPress={onImgBtnClick}
          tabIndex={0}
          src="#"
          alt="on img click"
        />
      </div>
    </main>
  );
};

export default KeyboardPage;
