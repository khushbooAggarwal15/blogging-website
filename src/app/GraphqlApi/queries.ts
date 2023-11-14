import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser {
    user {
      id
      title
      content
    }
  }
`;

//   const { loading, error, data } = useQuery(GET_USER, { client });
