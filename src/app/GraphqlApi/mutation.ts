import { gql } from "@apollo/client";
import apolloclient from '@/GraphqlApi/apolloclient'
// export const CREATE_POST = gql`
//   mutation CreatePost($title: String!, $content: String!) {
//     createPost(title: $title, content: $content) {
//       id
//       title
//       content
//     }
//   }
// `;

export const REGISTER_USER_MUTATION = gql`

mutation RegisterUser($username: String!, $password: String!, $email: String!) {
  registerUser(username: $username, password: $password, email: $email) {
    message
    success
  }
}
`
export const Login_User= gql`
mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    message
    success
    token
  }
}
`
  
