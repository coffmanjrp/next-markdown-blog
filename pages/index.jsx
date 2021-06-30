import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import matter from 'gray-matter';

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
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  // Get front matter from post
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get front matter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
