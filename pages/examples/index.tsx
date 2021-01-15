import React, { useState } from "react";

import styles from "../../styles/ExamplePage.module.css";

const ExamplePage: React.FC = () => {
  const [flashGood, setFlashGood] = useState(false);
  const [flashBad, setFlashBad] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);
  const onMenuOver = (): void => {
    console.log("on menu over ");
  };
  const onMenuOut = (): void => {
    console.log("on menu out ");
  };

  const onImgBtnClick = (): void => {
    console.log("on menu out ");
  };
  const clickHandler = (isGoodPractice): void => {
    isGoodPractice ? setFlashGood(!flashGood) : setFlashBad(!flashBad);
  };
  return (
    <div className={styles.ExamplePage}>
      <header className={styles.Title}>
        <h1>Web Content Accessibility Guidelines</h1>
      </header>
      <div className={styles.Content}>
        <aside id="menu">
          <nav className={styles.Menu}>
            <ul>
              <li>
                <a href="#infoAndRelationships">Info and Relationships</a>
              </li>
              <li>
                <a href="#useOfColour">Use of Colours</a>
              </li>
              <li>
                <a href="#noKeyBoardTrap">No Keyboard Trap</a>
              </li>
              <li>
                <a href="#threeFlashesOrBelow">Three Flashes or Below</a>
              </li>
              <li>
                <a href="#labelsOrInstructions">Labels or Instructions</a>
              </li>
              <li>
                <a href="#contrast">Contrast</a>
              </li>
              <li>
                <a href="#multipleWays">Multiple Ways</a>
              </li>
              <li>
                <a href="#languageOfParts">Language of Parts</a>
              </li>
              <li>
                <a href="#errorSuggestion">Error Suggestion</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <article id="infoAndRelationships" className={styles.Article}>
            <h2>Info and Relationships</h2>
            <p>
              <strong>
                Provide users with content that has clear structure and
                relationships.
              </strong>
            </p>
            <figure>
              <figcaption>List of images of nature</figcaption>
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.unenvironment.org%2Fru%2Fnode%2F27156&psig=AOvVaw3N50sTQD2Lk8crPVjhnfaU&ust=1610701304640000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKim9YqIm-4CFQAAAAAdAAAAABAD"
                alt="Azores Islands"
              />
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.airfrance.com%2FEC%2Fen%2Fcommon%2Ftravel-guide%2F4-fabulous-nature-experiences-near-santiago.htm&psig=AOvVaw3N50sTQD2Lk8crPVjhnfaU&ust=1610701304640000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKim9YqIm-4CFQAAAAAdAAAAABAU"
                alt="Chilie's landscape"
              />
            </figure>
          </article>
          <article id="useOfColour" className={styles.Article}>
            <h2>Use of Colours</h2>
            <p>
              <strong>
                Colors must have sufficient contrast between text color and its
                background (technically called luminosity contrast ratio). This
                includes text on images, icons, and buttons. Also colors used to
                convey information on diagrams, maps, and other types of images
                must be distinguishable.
              </strong>
            </p>
            <p className={`${styles.TextExample} ${styles.TextExample__Bad}`}>
              <span>Bad Example</span>
            </p>
            <p className={`${styles.TextExample} ${styles.TextExample__Good}`}>
              <span>Good Example</span>
            </p>
          </article>
          <article id="noKeyBoardTrap" className={styles.Article}>
            <h2>No Keyboard Trap</h2>
            <p>
              <strong>Your website must not trap keyboard users</strong>
            </p>
            <p>
              <strong>Bad practice</strong>
            </p>
            <p>
              Can not navigate with "tab"
              <br />
              You may need to use tabindex="0" to ensure an element can receive
              keyboard focus
            </p>
            <div
              className={`${styles.MouseEventBtn} ${styles.MouseEventBtn__Over}`}
              onMouseOver={onMenuOver}
              onFocus={onMenuOver}
              onMouseOut={onMenuOut}
              onBlur={onMenuOut}
            >
              On Mouse Over Event
            </div>
            <p>
              <strong>Good practice</strong>
            </p>
            <div>
              <div
                className={`${styles.MouseEventBtn} ${styles.MouseEventBtn__Click}`}
                onClick={onImgBtnClick}
                onKeyPress={onImgBtnClick}
                tabIndex={0}
              >
                On click Event
              </div>
            </div>
          </article>
          <article id="threeFlashesOrBelow" className={styles.Article}>
            <h2>Three Flashes or Below</h2>
            <p>
              <strong>
                No content flashes more than three times per second
              </strong>
            </p>
            <p>Bad Practice</p>
            <div
              className={`${styles.FashBtn} ${
                flashBad ? styles.FashBtn__Bad : ""
              }`}
              onClick={() => clickHandler(false)}
            >
              Flashes on Click Very Often
            </div>
            <p>Good Practice</p>
            <div
              className={`${styles.FashBtn} ${
                flashGood ? styles.FashBtn__Good : ""
              }`}
              onClick={() => clickHandler(true)}
            >
              Flashes on Hover Once
            </div>
          </article>
          <article id="focusOrder" className={styles.Article}>
            <h2>Focus Order </h2>
            <p>
              <strong>Pages work in a logical order</strong>
            </p>
            <p>
              ‘Focus order’ is the sequence in which a user accesses elements on
              your website. For example, some users can’t use a mouse and will
              ‘tab’ through your website – they must access elements in an order
              that makes sense. This order is as simple as a bit of logic, such
              as going from your header to your menu to your page content.
            </p>
          </article>
          <article id="focusOrder" className={styles.Article}>
            <h2>On Focus</h2>
            <p>A dropdown menu</p>
            <div
              className={`${styles.Dropdown} ${
                dropdownHover ? styles.DropdownHover : ""
              }`}
            >
              <button
                className={styles.DropdownBtn}
                onKeyPress={() => setDropdownHover(!dropdownHover)}
                onKeyUp={() => setDropdownHover(!dropdownHover)}
              >
                Dropdown
              </button>
              <div className={styles.DropdownContent} tabIndex={0}>
                <div id="opt1">
                  <input
                    id="select1"
                    type="checkbox"
                    data-selectlist="true"
                    data-prev=""
                    data-next="select2 "
                  />
                  Option 1
                </div>
                <div id="opt2">
                  <input
                    id="select2"
                    type="checkbox"
                    data-selectlist="true"
                    data-prev="select1"
                    data-next=""
                  />
                  Option 2
                </div>
              </div>
            </div>
          </article>
          <article id="labelsOrInstructions" className={styles.Article}>
            <h2>Labels or Instructions</h2>
            <p>
              <strong>Label elements and give instructions</strong>
            </p>
            <label htmlFor="randomText">
              Type some text
              <input type="text" name="randomText" />
            </label>
          </article>
          <article id="Contrast" className={styles.Article}>
            <h2>Contrast (Minimum)</h2>
            <p>
              <strong>
                The contrast ratio between text and background is at least
                4.5:1.
              </strong>
            </p>
            <p className={`${styles.TextExample} ${styles.TextExample__Bad}`}>
              <span>Bad Example</span>
            </p>
            <p className={`${styles.TextExample} ${styles.TextExample__Good}`}>
              <span>Good Example</span>
            </p>
          </article>
          <article id="multipleWays" className={styles.Article}>
            <h2>Multiple Ways</h2>
            <p>
              <strong>Offer several ways to find pages on your website</strong>
            </p>
            <p>
              <a href="#menu"> Go to Menu</a>
            </p>
          </article>
          <article id="languageOfParts" className={styles.Article}>
            <h2>Language of Parts</h2>
            <p>
              <strong>Tell users when the language on a page changes</strong>
            </p>
            <p>
              For indicating the language of a link destination
              <a
                className={styles.LangLink}
                href="https://www.w3.org/International/questions/qa-link-lang"
                hrefLang="en"
              >
                use <strong> hrefLang</strong> attribute
              </a>
            </p>
          </article>
          <article id="errorSuggestion" className={styles.Article}>
            <h2>Error Suggestion</h2>
            <p>
              <strong>Suggest fixes when users make errors</strong>
            </p>
            <form onSubmit={() => console.log("submited")}>
              <label htmlFor="name">Your Name</label>
              <br />
              <input type="text" name="name" required />
              <button type="submit">Submit</button>
            </form>
          </article>
        </main>
      </div>
    </div>
  );
};

export default ExamplePage;
