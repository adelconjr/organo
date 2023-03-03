import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export const TeamsContext = React.createContext(null);

const TeamsProvider = ({ children }) => {
    const [teams, setTeams] = useState([
        {
            id: uuidv4(),
            name: "Programação",
            color: '#57C278',
        },
        {
            id: uuidv4(),
            name: "Front-End",
            color: '#82CFFA',
        },
        {
            id: uuidv4(),
            name: "Data Science",
            color: '#A6D157',
        },
        {
            id: uuidv4(),
            name: "DevOps",
            color: '#E06B69',
        },
        {
            id: uuidv4(),
            name: "UX e Design",
            color: '#DB6EBF',
        },
        {
            id: uuidv4(),
            name: "Mobile",
            color: '#FFBA05',
        },
        {
            id: uuidv4(),
            name: "Inovação e Gestão",
            color: '#FF8A29',
        }
    ]);

    return <TeamsContext.Provider value={[teams, setTeams]}>{ children }</TeamsContext.Provider>
}

export default TeamsProvider;