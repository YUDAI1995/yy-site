import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Message() {
    return (
        <Layout>
            <Head>
                <title>message</title>
            </Head>
            <h1>message</h1>

            <h2>
                <Link href='/'>
                    <a>Back to home</a>
                </Link>
            </h2>
            <p>welcome!</p>
        </Layout>
    );
}
