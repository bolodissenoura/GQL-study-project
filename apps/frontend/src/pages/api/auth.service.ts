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

export const CREATE_USER = gql`
  mutation Mutation($createUserObject: CreateUserInput!) {
    createUser(createUserObject: $createUserObject) {
      email
      id
      name
      password
    }
  }
`;
