import React from "react"
import ReactMarkdown from "react-markdown"
import Layout from "@/app/ui/Layout";

const getPost = async () => {
    return  {
        id: "1",
        title: "Prisma is the perfect ORM for Next.js",
        content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
        published: false,
        author: {
            name: "Jiggly Puff",
            email: "jigglypuff@prisma.io",
        },
    }

}

const Post = async () => {
    const props = await getPost();

    let title = props.title
    if (!props.published) {
        title = `${title} (Draft)`
    }

    return (
        <Layout>
            <div>
                <h2>{title}</h2>
                <p>By {props?.author?.name || "Unknown author"}</p>
                <ReactMarkdown>{props.content}</ReactMarkdown>
            </div>
        </Layout>
    )
}

export default Post;
