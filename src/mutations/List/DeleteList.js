import {gql} from 'urql';

export const DELETE_LIST = gql`
  mutation DeleteList($id: ID!){
    deleteProject(id: $id) {
      id
    }
  }
`;
