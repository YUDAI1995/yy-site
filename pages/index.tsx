import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="This is my site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className={styles.title}>
          Welcome!
          <Link href="/about">
            <a>about</a>
          </Link>
        </h1>
      </Layout>
    </div>
  );
}
