import {gql} from 'urql';

export const LOGIN = gql`
  mutation SignInUser($email: String! $password: String!) {
    signInUser(
      email: $email
      password: $password
    ) {
      token
    }
  }
`
