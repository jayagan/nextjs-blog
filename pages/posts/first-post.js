import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Script from "next/script";

export default function FirstPost() {
    return (

        <Layout>
            <>             
                <Head>
                    <title> My First Post</title>
                    <meta name="description" content="sample"></meta>                                     
                </Head>

                <h1>My First Post</h1>
                <h2><Link href="/">Go back</Link></h2>

                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy={"lazyOnload"}
                    onLoad={
                        () => {
                            console.log(" fdgdfgdfg loaded");
                        }
                    }
                >
                </Script>

            </>

        </Layout>



    );
};