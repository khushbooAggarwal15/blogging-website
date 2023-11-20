import { gql } from "@apollo/client";

export const Get_Post = gql`
query GetPost {
  _id
  content
  image
  istrending
  shortDescription
  tags
  title
}
`

//   const { loading, error, data } = useQuery(GET_USER, { client });
