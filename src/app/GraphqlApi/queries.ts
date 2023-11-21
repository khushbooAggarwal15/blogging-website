import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      _id
      title
      content
      shortDescription
      tags
      image
      istrending
    }
  }
`;
