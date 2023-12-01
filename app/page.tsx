import Layout from "@/app/ui/Layout";
import Feed from "@/app/ui/Feed";
import { Suspense } from "react";

const Blog = () => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <div>
          <Feed />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
