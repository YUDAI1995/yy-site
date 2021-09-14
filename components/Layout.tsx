import React from "react";
import Link from "next/link";
import Footer from "./Footer";
import styles from "../styles/layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <ul className={styles.grobalmenu}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/message">Mesaage</Link>{" "}
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <Link href="/info">Info</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.view}>{children}</div>
      </div>

      <Footer />
    </div>
  );
}
