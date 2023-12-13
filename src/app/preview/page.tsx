"use client";
import React, { useEffect } from "react";
import { GET_POSTS } from "../GraphqlApi/queries";
import { useQuery } from "@apollo/client";
import createApolloClient from "../GraphqlApi/apolloclient";

const client = createApolloClient(
  "https://244b-103-179-9-163.ngrok-free.app/graphql"
);
function GetBlog() {
  const { error, data, loading } = useQuery(GET_POSTS, { client });

  useEffect(() => {
    if (error) {
      console.error("Error fetching posts:", error);
    } else if (data) {
      console.log("Fetched posts:", data);
    } else {
      console.log("No posts");
    }
  }, [error, data]);

  return (
    <div>
      {data && (
        <div>
          <h1>Blog Posts</h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data.posts.map((post: any) => (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetBlog;
