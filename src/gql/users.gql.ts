import { gql } from "@apollo/client";

export const Register = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      id
      firstName
      lastName
      email
      hashedPassword
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
