import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../componet/Layout';
import { getSortedPostsData } from '../lib/posts';
type Post = {
  id: any
  date?: any
  title?: any
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async (
  context
) => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    },
  };
}


export default function Home({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={"headingMd"}>
        <p>hi i am 21 year old self taught dev</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          <Link href={'/posts/firstpost'}>go to blog</Link>
        </p>
      </section>
      <section className={`${"headingMd"} ${"padding1px"}`}>
        <h2 className={"headingLg"}>Blog</h2>
        <ul className={"list"}>
          {posts.map(({ id, date, title }) => (
            
            <li className={"listItem"} key={id}>
              <Link href={`/posts/${id}`}>
              {title}
              </Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}