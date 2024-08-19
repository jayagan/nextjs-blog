import styles from './layout.module.css';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Link from 'next/link';

const name = "jaya";
export const siteTitle = "learn nextjs";

export default function Layout({ children, home }) {


    return (
        <div className={styles.container}>

            <Head>
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content="Description Here" />
                <meta property="og:image" content={``} />
                <meta name="twitter:card" content='summary_large_image' />
            </Head>

            <header className='styles.header'>
                {home &&

                    <Image
                        src="/images/profile.png"
                        className={utilStyles.borderCircle}
                        height={100}
                        width={100}
                        alt={name}
                    />
                }
                {
                    !home && <Link href="/"> Home </Link>
                }
            </header>
            <main>{children}</main>
        </div>
    );
}