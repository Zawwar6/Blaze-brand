import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogListClient from "./BlogListClient";

interface Blog {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

export default function BlogPage() {
  const blogsDir = path.join(process.cwd(), "src/content/blogs");
  const files = fs.readdirSync(blogsDir);

  const blogs: Blog[] = files.map((filename) => {
    const filePath = path.join(blogsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const excerpt = content.split(" ").slice(0, 25).join(" ") + "...";

    return {
      slug: filename.replace(".md", ""),
      title: data.title as string,
      date: data.date as string,
      excerpt,
      image: data.image || "/assets/traffic/karachitraffic.jpg", 
    };
  });

  return <BlogListClient blogs={blogs} />;
}
