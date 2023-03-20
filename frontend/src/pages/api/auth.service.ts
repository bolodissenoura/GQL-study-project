import { gql } from "@apollo/client";

export const GENERATE_TOKEN = gql`
  mutation SingIn($password: String!, $email: String!) {
    singIn(password: $password, email: $email) {
      token
      user {
        email
        name
      }
    }
  }
`;
