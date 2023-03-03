import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button'
import Field from '../Field'

import './Form.css';

const TeamForm = ({ insertTeam }) => {
    const initialValue = {
        id: uuidv4(),
        name: '',
        color: '',
    };

    const [team, setTeam] = useState(initialValue);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setTeam(prev => ({
            ...prev,
            [name]: value
        }));
    }
    
    const onSubmit = (e) => {
        e.preventDefault();

        insertTeam(team);

        setTeam(initialValue);
    }

    return ( 
        <form onSubmit={onSubmit}>
            <h2 className="title">Preencha os dados para criar um novo time</h2>

            <Field 
                name="name" 
                label="Nome" 
                placeholder="Digite o nome do time" 
                value={team.name} 
                onChange={handleChange} 
                required
            />

            <Field 
                type="color"
                name="color" 
                label="Time" 
                placeholder="Digite a cor do time" 
                value={team.color} 
                onChange={handleChange}  
                required 
            />

            <Button>Adicionar time</Button>
        </form>
    )

}

export default TeamForm;