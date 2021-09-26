import React from "react";
import Card from "../../component/Card";

const Blogs = ({ blog }) => {
  if (!blog) {
    return <div>no found</div>;
  }

  return (
    <div className="m-10 bg-gray">
      <div className="flex p-10 bg-gray">
        <div className="w-1/2 flex justify-center items-center">
          <img className="rounded-full w-56 h-56" src={`/${blog.image}.png`} />
        </div>
        <div className="w-1/2 flex-1 break-words pl-3">
          <div>{blog.title}</div>
          <div className="mt-2">{blog.description}</div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const responce = await fetch(
    `https://event-next-default-rtdb.asia-southeast1.firebasedatabase.app/blog/${params.bid}.json`
  );

  const data = await responce.json();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      blog: data,
    },
  };
}

export async function getStaticPaths() {
  const responce = await fetch(
    "https://event-next-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json"
  );

  const data = await responce.json();

  const paths = [];

  for (const key in data) {
    paths.push({ params: { bid: key } });
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export default Blogs;
