import React from 'react';
import { gql, useQuery } from '@apollo/client';

function List({skills}) {
    return (
      <div>
        {skills.map(skill => 
          <div key={skill.id}> 
            {skill.name}
          </div>
        )}
      </div>
    );
  }

const useFetchSkills = () => {
    const LIST_SKILLS_QUERY = gql`
        query LIST_SKILLS_QUERY {
            listSkills {
            items {
                id
                name
            }
            }
        }
        `;

    const { loading, error, data } =  useQuery(LIST_SKILLS_QUERY);
    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error : {error.message}</p>);
        return ( 
            <div>
            <List skills = {data.allSkills} />      
            </div>
        );
        }
export default useFetchSkills;