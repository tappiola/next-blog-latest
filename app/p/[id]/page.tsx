import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "@/app/ui/Layout";
import { getPost } from "@/app/lib/actions";
import { PostProps } from "@/app/ui/Post";

const Post = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = await getPost(id);

  if (!post) {
    return "Post not found";
  }

  const title = post.published ? post.title : `${post.title} (Draft)`;

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {post?.author?.name || "Unknown author"}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </Layout>
  );
};

export default Post;
