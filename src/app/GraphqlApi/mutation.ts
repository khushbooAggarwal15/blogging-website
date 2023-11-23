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
export const REGISTER_USER_MUTATION = gql`
 mutation RegisterUser($email: String!, $password: String!, $username: String!) {
  registerUser(email: $email, password: $password, username: $username) {
    message
    success
    user {
      
    }
  }
}
`;
