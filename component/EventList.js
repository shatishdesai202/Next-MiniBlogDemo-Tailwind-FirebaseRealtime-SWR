import React, { useEffect, useState } from "react";
import Card from "./Card";

const EventList = ({ blog }) => {
  const [transformedBlog, setTransformedBlog] = useState([]);
  useEffect(() => {
    let transformedEvent = [];
    for (const key in blog) {
      transformedEvent.push({
        id: key,
        ...blog[key],
      });
    }
    setTransformedBlog(transformedEvent);
  }, [blog]);

  return (
    <div className="grid  grid-cols-3  gap-4">
      {transformedBlog &&
        transformedBlog.map((item, index) => <Card key={index} blog={item} />)}
    </div>
  );
};

export default EventList;
