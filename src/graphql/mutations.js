/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createEmployeeSkills = /* GraphQL */ `
  mutation CreateEmployeeSkills(
    $input: CreateEmployeeSkillsInput!
    $condition: ModelEmployeeSkillsConditionInput
  ) {
    createEmployeeSkills(input: $input, condition: $condition) {
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
export const updateEmployeeSkills = /* GraphQL */ `
  mutation UpdateEmployeeSkills(
    $input: UpdateEmployeeSkillsInput!
    $condition: ModelEmployeeSkillsConditionInput
  ) {
    updateEmployeeSkills(input: $input, condition: $condition) {
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
export const deleteEmployeeSkills = /* GraphQL */ `
  mutation DeleteEmployeeSkills(
    $input: DeleteEmployeeSkillsInput!
    $condition: ModelEmployeeSkillsConditionInput
  ) {
    deleteEmployeeSkills(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
