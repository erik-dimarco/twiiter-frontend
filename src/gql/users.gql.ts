import { gql } from "@apollo/client";

export const Register = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        firstName
        lastName
        email
        hashedPassword
        role
      }
    }
  }
`;

export const Login = gql`
  mutation LogIn($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;

export const UserQuery = gql`
  query User {
    me {
      id
      firstName
      lastName
      email
      role
    }
  }
`;
