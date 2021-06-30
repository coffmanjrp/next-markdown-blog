import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import matter from 'gray-matter';
import Post from '../components/Post';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next Markdown Blog</title>
      </Head>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
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
