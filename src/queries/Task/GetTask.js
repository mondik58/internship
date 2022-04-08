import {gql} from 'urql';

export const GET_TASK = gql`
  query GetTask($id: ID!){
    project(id: $id) {
      createdAt
      deadline
      description
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
