import React from "react";
import useStore from "../api/hooks/useStore";

const Test = () => {
  const { products, carts, users, posts, comments, quotes, todos } = useStore();
  console.log("endpoint: products ", products);
  console.log("endpoint: carts ", carts);
  console.log("endpoint: users", users);
  console.log("endpoint: posts", posts);
  console.log("endpoint: comments", comments);
  console.log("endpoint: quotes", quotes);
  console.log("endpoint: todos", todos);

  return <div></div>;
};

export default Test;
