import React from 'react';
import Link from 'next/link';

export default function Post({ post }) {
  const { title, date, excerpt, cover_image } = post.frontmatter;

  return (
    <div className="card">
      <img src={cover_image} alt={title} />
      <div className="post-date">Posted on {date}</div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
}
