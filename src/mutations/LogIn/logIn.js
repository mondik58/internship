import {gql} from 'urql';

export const LOGIN_USER = gql`
  mutation ($email: String! $password: String!) {
    signInUser(
      email: $email
      password: $password
    ) {
      token
      user {
        email
        firstName
        id
        lastName
      }
    }
  }
`
