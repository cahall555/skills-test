import {useState, useEffect} from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listSkills } from '../graphql/queries';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const useFetchSkills = () => {

const [Skills, setSkills] = useState([])

    async function fetchSkills() {
        try {
        const SkillData = await API.graphql(graphqlOperation(listSkills))
        const Skills = SkillData.data.listSkills.items
        setSkills(Skills)
        } catch (err) { console.log('error fetching Skills') }
    }

    useEffect(() => {
        fetchSkills()
    }, [])
    return {Skills, fetchSkills}
}

export default useFetchSkills;