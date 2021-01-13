import React from 'react';
import styles from '../styles/Home.module.css'

const MainPage: React.FC = () => {
  return <main className={styles.MainPage}>
    <h1 className={styles.MainPageTitle}>For a More Creative Brain Follow These 5 Steps</h1>
    <p className={styles.MainPageParagraph}>
      Nearly all great ideas follow a similar creative process and this article explains how this process works. Understanding this is important because creative thinking is one of the most useful skills you can possess. Nearly every problem you face in work and in life can benefit from innovative solutions, lateral thinking, and creative ideas.
    </p>
    <p>
      Anyone can learn to be creative by using these five steps. That's not to say being creative is easy. Uncovering your creative genius requires courage and tons of practice. However, this five-step approach should help demystify the creative process and illuminate the path to more innovative thinking.
    </p>
    <p>
      To explain how this process works, let me tell you a short story.
    </p>
    <h2>A Problem in Need of a Creative Solution</h2>
    <p>
      In the 1870s, newspapers and printers faced a very specific and very costly problem. Photography was a new and exciting medium at the time. Readers wanted to see more pictures, but nobody could figure out how to print images quickly and cheaply.
    </p>
    <p>
      For example, if a newspaper wanted to print an image in the 1870s, they had to commission an engraver to etch a copy of the photograph onto a steel plate by hand. These plates were used to press the image onto the page, but they often broke after just a few uses. This process of photoengraving, you can imagine, was remarkably time consuming and expensive.
    </p>
    <p>
      The man who invented a solution to this problem was named Frederic Eugene Ives. He went on to become a trailblazer in the field of photography and held over 70 patents by the end of his career. His story of creativity and innovation, which I will share now, is a useful case study for understanding the 5 key steps of the creative process.
    </p>
    <img src="https://jamesclear.com/wp-content/uploads/2016/07/halftone-printing-process.jpg" alt="Tram" />
  </main>;
}

export default MainPage;
