/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      firstname
      lastname
      skills {
        items {
          id
          employee {
            id
            firstname
            lastname
            createdAt
            updatedAt
          }
          skill {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        skills {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployeeSkills = /* GraphQL */ `
  query GetEmployeeSkills($id: ID!) {
    getEmployeeSkills(id: $id) {
      id
      employee {
        id
        firstname
        lastname
        skills {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      skill {
        id
        name
        employees {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployeeSkillss = /* GraphQL */ `
  query ListEmployeeSkillss(
    $filter: ModelEmployeeSkillsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeSkillss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        employee {
          id
          firstname
          lastname
          skills {
            nextToken
          }
          createdAt
          updatedAt
        }
        skill {
          id
          name
          employees {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      employees {
        items {
          id
          employee {
            id
            firstname
            lastname
            createdAt
            updatedAt
          }
          skill {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        employees {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
