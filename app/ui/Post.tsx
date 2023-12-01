"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    // <Link href={`/p/${post.id}`}>
    <div onClick={() => router.push(`/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
    // </Link>
  );
};

export default Post;
