import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import Link from "./Link";
import Color from "colorjs.io";
import { sans } from "./fonts";
import { CSSProperties } from "react";

// Extend the CSSProperties type
interface CustomCSSProperties extends CSSProperties {
  "--lightLink"?: string;
  "--darkLink"?: string;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="relative -top-[10px] flex flex-col gap-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="block py-4 hover:scale-[1.005]"
          href={"/" + post.slug + "/"}
        >
          <article>
            <PostTitle post={post} />
            <PostMeta post={post} />
            <PostSubtitle post={post} />
          </article>
        </Link>
      ))}
    </div>
  );
}

export const metadata = {
  title: "wherejitenblogs — A blog by Jiten Patel",
  description: "A personal blog by Jiten Patel",
  alternates: {
    types: {
      "application/atom+xml": "https://overreacted.io/atom.xml",
      "application/rss+xml": "https://overreacted.io/rss.xml",
    },
  },
};

export async function getPosts() {
  const entries = await readdir("./public/", { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const fileContents = await Promise.all(
    dirs.map((dir) => readFile("./public/" + dir + "/index.md", "utf8"))
  );
  const posts: {
    slug: string;
    title?: string;
    date?: string;
    spoiler?: string;
  }[] = dirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const { data } = matter(fileContent);
    return { slug, ...data };
  });
  posts.sort((a, b) => {
    return Date.parse(a.date || "") < Date.parse(b.date || "") ? 1 : -1;
  });
  return posts;
}

function PostTitle({
  post,
}: {
  post: {
    slug: string;
    title?: string;
    date?: string;
    spoiler?: string;
  };
}) {
  let lightStart = new Color("lab(63 59.32 -1.47)");
  let lightEnd = new Color("lab(33 42.09 -43.19)");
  let lightRange = lightStart.range(lightEnd);
  let darkStart = new Color("lab(81 32.36 -7.02)");
  let darkEnd = new Color("lab(78 19.97 -36.75)");
  let darkRange = darkStart.range(darkEnd);
  let today = new Date();
  let postDate = new Date(post.date || today.toISOString());
  let timeSinceFirstPost = today.getTime() - new Date(2018, 10, 30).getTime();
  let timeSinceThisPost = today.getTime() - postDate.getTime();
  let staleness = timeSinceThisPost / timeSinceFirstPost;

  const style: CustomCSSProperties = {
    "--lightLink": lightRange(staleness).toString(),
    "--darkLink": darkRange(staleness).toString(),
  };

  return (
    <h2
      className={[
        sans.className,
        "text-[28px] font-black",
        "text-[--lightLink] dark:text-[--darkLink]",
      ].join(" ")}
      style={style}
    >
      {post.title}
    </h2>
  );
}

function PostMeta({
  post,
}: {
  post: {
    slug: string;
    title?: string;
    date?: string;
    spoiler?: string;
  };
}) {
  return (
    <p className="text-[13px] text-gray-700 dark:text-gray-300">
      {new Date(post.date || "").toLocaleDateString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </p>
  );
}

function PostSubtitle({
  post,
}: {
  post: {
    slug: string;
    title?: string;
    date?: string;
    spoiler?: string;
  };
}) {
  return <p className="mt-1">{post.spoiler}</p>;
}
