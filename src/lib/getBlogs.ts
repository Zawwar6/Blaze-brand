import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define blog frontmatter type
export interface BlogMeta {
  title: string;
  date: string;
  [key: string]: any; // in case you add tags, author, etc.
}

export interface Blog {
  slug: string;
  meta: BlogMeta;
  content: string;
}

const blogsDir = path.join(process.cwd(), "src/content/blogs");

// ✅ Get all blogs (only metadata)
export function getAllBlogs(): { slug: string; meta: BlogMeta }[] {
  const files = fs.readdirSync(blogsDir);

  return files.map((filename) => {
    const filePath = path.join(blogsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      meta: data as BlogMeta,
    };
  });
}

// ✅ Get single blog by slug (metadata + content)
export function getBlogBySlug(slug: string): Blog {
  const filePath = path.join(blogsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    meta: data as BlogMeta,
    content,
  };
}
