import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const { posts } = useSelector((state) => state.postReducer);
  return (
    <div>
      <h2>Post Page</h2>
      {JSON.stringify(posts)}
    </div>
  );
};
