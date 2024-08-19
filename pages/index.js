import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Date } from '../components/date';
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from '../lib/posts';



export async function getStaticProps() {
 const allPostsData = getSortedPostsData();

 return {
  props: {
    allPostsData
  }
 };  
}

export default function Home({allPostsData}) {
  return (
    <div >

      <Layout className={utilStyles.layout} home>

        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p className={utilStyles.headingMd}>
            Jayalakshmi Ganesan
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} >

          <ul className={utilStyles.listItem}>
            {
              allPostsData.map((p, i)=> 
                {

                  console.log(p);

                
                return (<li key={i}>

                  <Link href={`/posts/${p.id}`}>{p.title}</Link>
                  <br/>
                 <small  className={utilStyles.lightText} >
                  <Date dateString={p.date}/>
                 </small>
                  <br/>
                 

                </li>);
                }
              )
            }

          </ul>

        </section>


      </Layout>


    </div>
  );
}
