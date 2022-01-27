import {gql} from 'urql';

export const LOGIN = gql`
  mutation ($email: String! $password: String!) {
    signInUser(
      email: $email
      password: $password
    ) {
      token
    }
  }
`
