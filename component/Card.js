import React from "react";
import Link from "next/link";

const Card = ({ blog }) => {
  console.log("blog", blog);
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="border rounded-md border-gray-400 relative cursor-pointer">
        <img className="h-72 w-full" src={"/" + blog.image + ".png"} />
        <div className="absolute top-0 text-center h-full w-full flex justify-center items-center text-white text-3xl font-semibold">
          {blog.title}
        </div>
      </div>
    </Link>
  );
};

export default Card;
