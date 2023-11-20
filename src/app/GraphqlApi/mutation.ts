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
// `

// export const Add_Post = gql`
// mutation AddPost($title: String!, $content: String!) {
//   addPost(title: $title, content: $content) {
    
//   }
// }
// `

export const Add_Post = gql`
mutation AddPost($title: String!, $content: String!, $shortDescription: String!, $tags: String!, $istrending: Boolean!, $image: String!) {
  addPost(title: $title, content: $content, shortDescription: $shortDescription, tags: $tags, istrending: $istrending, image: $image) {
    content
    istrending
    shortDescription
    tags
    title
  }
`;

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
  
