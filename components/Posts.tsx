import moment from "moment";
import useSWR from "swr";

import { HNPost } from "../types/post";
import Spinner from "../components/Spinner";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function usePosts() {
  const { data, error } = useSWR("/api/posts", fetcher);
  return {
    posts: data as HNPost[],
    isLoading: !error && !data,
    isError: error,
  };
}

function Posts() {
  const { posts, isLoading, isError } = usePosts();
  if (isError) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="flex-grow w-full max-w-screen-lg mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <Spinner fill="currentColor" className="text-orange-500" />
      </div>
    );
  return (
    <div className="w-full flex-grow max-w-screen-lg mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      {posts.map(({ score, by, title, url, time, descendants, id }, index) => (
        <article key={"art-" + id}>
          <header>
            <a className="no-underline text-black" href={url}>
              <div className="mb-0 pb-0">
                <h1 className="mb-0 pb-0 text-xl font-semibold text-gray-800 no-underline">
                  {index + 1}. {title}
                </h1>
              </div>
            </a>
            <span className="mb-0 text-xs">
              {score} points - {moment(time).format("LLLL")} - {by} -{" "}
              <a
                className="no-underline text-black"
                href={`https://news.ycombinator.com/item?id=${id}`}
              >
                {descendants} comments
              </a>
            </span>
          </header>
          <section>
            <a className="no-underline text-black" href={url}>
              <p className="mb-0 break-all text-xs md:text-base">{url}</p>
            </a>
          </section>
        </article>
      ))}
    </div>
  );
}

export default Posts;
