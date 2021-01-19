import Link from 'next/link';

import { linksA, linksAA } from './data';
import { Guideline } from './Guideline';
import style from './my.module.css';

const mapLink = (link) => (
  <li key={link.id}>
    <Link href={`#${link.id}`}>
      <a>{link.title}</a>
    </Link>
  </li>
);
const mapGuidline = (link) => <Guideline key={link.id} {...link} />;

export default function My() {
  return (
    <div className={style.container}>
      <aside className={style.lSection}>
        <nav>
          <ul>
            <h2>Level A</h2>
            {linksA.map(mapLink)}

            <h2>Level AA</h2>
            {linksAA.map(mapLink)}
          </ul>
        </nav>
      </aside>
      <main className={style.rSection}>
        <h1>Web accessibility</h1>

        <h2>Level A</h2>
        {linksA.map(mapGuidline)}
        <hr />
        <h2>Level AA</h2>
        {linksAA.map(mapGuidline)}
      </main>
    </div>
  );
}
