import React from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.css";

interface IHeaderLinkProps {
    href: string;
}

const HeaderLink: React.FC<IHeaderLinkProps> = ({ href, children }) => (
    <span className={styles.HeaderLink}>
        <Link href={href}>{children}</Link>
    </span>
);

interface IHeaderProps {
    // ...
}

const Header: React.FC<IHeaderProps> = () => {
    return <header className={styles.Header}>
        <nav>
            <HeaderLink href="#">Main Page</HeaderLink>
            <HeaderLink href="#">Second Page</HeaderLink>
            <HeaderLink href="#">Third Page</HeaderLink>
            <HeaderLink href="#">Fourth Page</HeaderLink>
        </nav>
    </header>;
}

export default Header;
