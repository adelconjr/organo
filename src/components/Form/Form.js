import { useState, useContext } from 'react'
import { TeamsContext } from '../../contexts/TeamsContext';
import Button from '../Button'
import SelectList from '../SelectList'
import TextField from '../TextField'

import './Form.css';

export const Form = (props) => {
    const [collaborator, setCollaborator] = useState({
        nome: '',
        cargo: '',
        imagem: '',
        time: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        console.log(name);

        setCollaborator(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const onSave = (e) => {
        e.preventDefault();

        props.onSubmitCollaborator(collaborator);

        setCollaborator({
            nome: '',
            cargo: '',
            imagem: '',
            time: '',
        })
    }

    return (
        <section className="main-form">                
            <form onSubmit={onSave}>
                <h2 className="title">Preencha os dados para criar o card do collaborator</h2>

                <TextField 
                    name="nome" 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required={true} 
                    value={collaborator.nome} 
                    onChange={handleChange} 
                />

                <TextField 
                    name="cargo" 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    required={false} 
                    value={collaborator.cargo} 
                    onChange={handleChange}  
                />

                <TextField 
                    name="imagem" 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    required={false} 
                    value={collaborator.imagem} 
                    onChange={handleChange}  
                />

                <TeamsContext.Consumer>

                    { teams => 
                        <SelectList 
                            name="time" 
                            label="Time" 
                            items={teams} 
                            required={true} 
                            value={collaborator.time} 
                            onChange={handleChange} 
                        />
                    }

                </TeamsContext.Consumer>

                <Button>Criar card</Button>
            </form>
        </section>
        
    )
}