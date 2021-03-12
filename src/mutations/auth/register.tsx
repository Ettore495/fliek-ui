import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register(
    $firstname: String!
    $lastname: String!
    $username: String!
    $password: String!
  ) {
    register(
      firstname: $firstname
      lastname: $lastname
      username: $username
      password: $password
    ) {
      id
      firstname
      lastname
      username
    }
  }
`;
