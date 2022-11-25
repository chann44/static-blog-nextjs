import Head from "next/head";
import { Date } from "../../componet/Date";
import Layout from "../../componet/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";


export default function Post({ postData }: any) {
  return (
    <Layout home={false}>
         <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="headingXl">
      {postData.title}
      </h1>
      <br />
      {postData.id}
      <br />
      <div className="lightText">
      <Date dateString={postData.date} />
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
  
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}