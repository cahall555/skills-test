import gql from '@apollo/client';

const LIST_SKILLS_QUERY = gql`
  query LIST_SKILLS_QUERY {
    listSkills {
      items {
        id
        name
        description
        completed
      }
    }
  }
`;
export { LIST_SKILLS_QUERY };