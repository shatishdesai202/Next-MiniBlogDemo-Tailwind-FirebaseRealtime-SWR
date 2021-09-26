import React from "react";
import EventList from "../../component/EventList";

const Blog = ({ blogs }) => {
  return (
    <div>
      <div className="m-10">
        <h1 className="text-3xl mb-2 font-semibold underline">All Blog</h1>
        <EventList blog={blogs} />
      </div>
    </div>
  );
};

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

export default Blog;
