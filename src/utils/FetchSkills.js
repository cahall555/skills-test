import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { listSkills } from "../graphql/queries";

const LIST_SKILLS_QUERY = gql(listSkills);

const useFetchSkills = () => {
  const [Skills, setSkills] = useState([]);
  const { loading, error, data } = useQuery(LIST_SKILLS_QUERY);

  async function fetchSkills() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    try {
      const Skills = data.listSkills.items;
      setSkills(Skills);
    } catch (err) {
      console.log("error fetching skills");
    }
  }
  useEffect(() => {
    fetchSkills();
  }, [data, loading, error]);
  return [Skills, setSkills, loading, error];
};

export default useFetchSkills;
