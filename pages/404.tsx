import Head from "next/head";
import Link from "next/link";

const Custom404: React.ReactNode = () => {
  return (
    <main className="notfound">
      <Head>
        <title>Not Found.</title>
      </Head>
      <section>
        <h1>
          <span>404</span>Sorry, This page is Not Found
        </h1>
        ←
        <Link href="/">
          <a> return to home</a>
        </Link>
      </section>
    </main>
  );
};

export default Custom404;
