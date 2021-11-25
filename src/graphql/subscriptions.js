/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateEmployeeSkills = /* GraphQL */ `
  subscription OnCreateEmployeeSkills {
    onCreateEmployeeSkills {
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
export const onUpdateEmployeeSkills = /* GraphQL */ `
  subscription OnUpdateEmployeeSkills {
    onUpdateEmployeeSkills {
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
export const onDeleteEmployeeSkills = /* GraphQL */ `
  subscription OnDeleteEmployeeSkills {
    onDeleteEmployeeSkills {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
