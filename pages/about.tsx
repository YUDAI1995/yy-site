import Link from "next/link";
import styles from "../components/css/about.module.scss";
const About = () => {
  return (
    <section className={styles.inner}>
      <h2>about</h2>
      <p>coming soon...</p>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </section>
  );
};

export default About;
