"use client";
import Link from "next/link";
import styles from "./BlogListClient.module.css";

interface Blog {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

interface Props {
  blogs: Blog[];
}

export default function BlogListClient({ blogs }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Latest Blogs</h1>
      <div className={styles.grid}>
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`} className={styles.card}>
            {blog.image && <img src={blog.image} alt={blog.title} className={styles.image} />}
            <h2 className={styles.title}>{blog.title}</h2>
            <p className={styles.date}>{blog.date}</p>
            <p className={styles.excerpt}>{blog.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
