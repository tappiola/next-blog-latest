"use server";
import prisma from "../lib/prisma";

export const getPost = async (id: string) => {
  return prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
};

export const getPosts = async () => {
  return prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
};
