import Link from "next/link";
import Layout from "../components/Layout";
const Contact = () => {
  return (
    <Layout>
      <section>
        <h2>Contact</h2>
        <p>coming soon...</p>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </section>
    </Layout>
  );
};

export default Contact;