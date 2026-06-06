import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blogsDir = path.join(process.cwd(), "src/content/blogs");
  const filePath = path.join(blogsDir, `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1 className="blog-title">{data.title}</h1>
        {data.date && <p className="blog-date">{data.date}</p>}
        <article className="blog-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
