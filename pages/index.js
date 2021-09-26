import { useEffect, useState } from "react";
import useSWR from "swr";
import EventList from "../component/EventList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({ blogs }) {
  const [featuredBlog, setFeaturedBlog] = useState();

  const { data, error } = useSWR(
    "https://event-next-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json",
    fetcher,
    { fallbackData: blogs, refreshInterval: 1000 * 3 }
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  let featuredBlogObj = {};

  for (const key in data) {
    if (data[key].isFeatured) {
      featuredBlogObj[key] = data[key];
    }
  }

  return (
    <div className="m-10">
      <h1 className="text-3xl mb-2 font-semibold underline">Featured Blog</h1>
      <EventList blog={featuredBlogObj} />
    </div>
  );
}

export async function getStaticProps() {
  const responce = await fetch(
    "https://event-next-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json"
  );

  const data = await responce.json();

  return {
    props: {
      blogs: data,
    },
  };
}
