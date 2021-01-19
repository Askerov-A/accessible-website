import Link from 'next/link';

import { badLinks, goodLinks } from '../data';

const mapLink = (path) => (
  <li className="link" key={path}>
    <Link href={{ pathname: '/my/template', query: { page: path } }}>
      <a>{path}</a>
    </Link>
  </li>
);

export default function PageTitled() {
  return (
    <>
      <h4>Good</h4>
      <header className="header header__success">
        <nav>
          <ul className="list-of-links">{goodLinks.map(mapLink)}</ul>
        </nav>
      </header>
      <h4>Bad</h4>
      <header className="header header__danger">
        <ul className="list-of-links">{badLinks.map(mapLink)}</ul>
      </header>
      <style jsx>{`
        .header {
          padding: 5px;
        }

        .header__success {
          background: rgba(0, 255, 0, 0.5);
        }

        .header__danger {
          background: rgba(255, 0, 0, 0.5);
        }

        .list-of-links {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }

        .link {
          flex: 1 0 25%;
        }
      `}</style>
    </>
  );
}
