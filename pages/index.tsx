import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="This is my site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
          <Link href="/about">
            <a>about</a>
          </Link>
        </h1>

      </main>

      <footer className={styles.footer}>
        <div className="inner"><small>&copy; 2021 YUDAI1995</small></div>
      </footer>
    </div>
  );
}
