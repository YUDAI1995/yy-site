import Link from "next/link";
import styles from "../components/css/about.module.scss";
import Layout from "../components/Layout";
const About = () => {
  return (
    <Layout>
      <section>
        <h2>about</h2>
        <p>coming soon...</p>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </section>
    </Layout>
  );
};

export default About;
