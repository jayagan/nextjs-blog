import Layout from "../../components/layout";
import Head from "next/head";

import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from '/styles/utils.module.css';
import { Date } from "../../components/date";

export default function Post({ postData }) {
    return (<Layout>

        <Head>
            <title>{postData.title} </title>
        </Head>

        <article>
            <h1 className={utilStyles.headingXl}> {postData.title} </h1>

            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>

            <br></br>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>);
}


export async function getStaticProps({ params }) {

    console.log(params);

    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }

}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}