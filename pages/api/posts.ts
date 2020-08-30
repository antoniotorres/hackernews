import { NextApiRequest, NextApiResponse } from "next";

import { HNPost } from "../../types/post";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json",
  );
  const data = await response.json();
  if (!Array.isArray(data)) {
    console.log("HN Response:", data);
    throw new Error("Bad Respnse from Hacker News API");
  }
  const posts = data as string[];
  const postsFiltered = posts.slice(0, 30);

  const postsWithData = await Promise.all(
    postsFiltered.map(async (post) => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${post}.json`,
      );
      const data = await response.json();
      if (data.by === undefined) {
        throw new Error("Bad Respnse from Hacker News API");
      }
      return data as HNPost;
    }),
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(postsWithData);
};
