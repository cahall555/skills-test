import {useState, useEffect} from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createSkill} from '../graphql/mutations'
import awsExports from '../aws-exports';
Amplify.configure(awsExports);



const useAddSkill = () => {
    const [Skills, setSkills] = useState([])
    const initialState = { id: '', name: ''}
    const [formState, setFormState] = useState(initialState)

    const setInput = (key, value) => {
        setFormState({ ...formState, [key]: value })
      }

    async function addSkill() {
        try {
          if (!formState.id || !formState.name) return
          const Skill = { ...formState }
          setSkills([...Skills, Skill])
          setFormState(initialState)
          await API.graphql(graphqlOperation(createSkill, {input: Skill}))
        } catch (err) {
          console.log('error creating Skill:', err)
        }
      }

      useEffect(() => {
        addSkill()
    },)

    return {Skills, initialState, formState, setInput, addSkill}
  }

export default useAddSkill;