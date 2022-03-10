import {gql} from 'urql';

export const GET_LISTS = gql`
  query {
    projects {
      createdAt
      deadline
      id
      public
      tasks {
        content
        createdAt
        done
        id
        projectId
      }
      title
    }
  }
`;
