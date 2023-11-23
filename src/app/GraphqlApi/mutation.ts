import { gql } from "@apollo/client";
export const ADD_POST = gql`
  mutation AddPost(
    $title: String!
    $shortDescription: String!
    $tags: [String]!
    $image: String!
    $istrending: Boolean!
    $content: String!
  ) {
    addPost(
      title: $title
      shortDescription: $shortDescription
      tags: $tags
      image: $image
      istrending: $istrending
      content: $content
    ) {
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

export const Login_User = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      success
      message
      token
    }
  }
`;
