import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string | null;
    email?: string | null;
  } | null;
  content: string | null;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";

  return (
    <Link href={`/p/${post.id}`}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </Link>
  );
};

export default Post;
