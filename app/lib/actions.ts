'use server';
export const getPosts = async () => {
    return [{
        id: "1",
        title: "Prisma is the perfect ORM for Next.js",
        content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
        published: false,
        author: {
            name: "Jiggly Puff",
            email: "jigglypuff@prisma.io",
        },
    }]
}