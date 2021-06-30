import fs from 'fs';
import path from 'path';
import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next Markdown Blog</title>
      </Head>
      <h2>Next Markdown Blog</h2>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  console.log(files);

  return {
    props: {
      posts: 'The posts',
    },
  };
}
