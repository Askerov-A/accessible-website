import ConsistentIdentification from './ConsistentIdentification';
import ErrorIdentification from './ErrorIdentification';
import FocusVisible from './FocusVisible';
import ImageOfText from './ImageOfText';
import Keyboard from './Keyboard';
import LanguageOfPage from './LanguageOfPage';
import NonTextContent from './NonTextContent';
import PageTitled from './PageTitled';
import PauseStopHide from './PauseStopHide';

export const mapOfExamples = {
  nontextcontent: NonTextContent,
  audiodescription: null,
  sensory: null,
  keyboard: Keyboard,
  pauseStopHide: PauseStopHide,
  pageTitled: PageTitled,
  languageOfPage: LanguageOfPage,
  errorIdentification: ErrorIdentification,
  nameRoleValue: null,
  audioDescription: null,
  imagesOfText: ImageOfText,
  focusVisible: FocusVisible,
  consistentIdentification: ConsistentIdentification,
};
