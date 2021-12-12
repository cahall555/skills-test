import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { listEmployees } from "../graphql/queries";

const LIST_EMPLOYEES_QUERY = gql(listEmployees);

const useFetchEmployees = () => {
  const [Employees, setEmployees] = useState([]);

  const { loading, error, data } = useQuery(LIST_EMPLOYEES_QUERY);

  async function fetchEmployees() {
    try {
      const Employees = data.listEmployees.items;
      setEmployees(Employees);
    } catch (err) {
      console.log("error fetching employees");
    }
  }
  useEffect(() => {
    fetchEmployees();
  }, [data, loading, error]);
  return [Employees, setEmployees, loading, error];
};

export default useFetchEmployees;
