import { useState, useContext } from 'react'
import { TeamsContext } from '../../contexts/TeamsProvider';
import Button from '../Button'
import SelectList from '../SelectList'
import Field from '../Field'
import { v4 as uuidv4 } from 'uuid'

const CollaboratorForm = ({ onSubmitCollaborator }) => { 
    const initialValue = {
        id: uuidv4(),
        nome: '',
        cargo: '',
        imagem: '',
        time: '',
        favorite: false,
    }

    const [teams] = useContext(TeamsContext);

    const [collaborator, setCollaborator] = useState(initialValue);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setCollaborator(prev => ({
            ...prev,
            [name]: value
        }));
    }    

    const onSave = (e) => {
        e.preventDefault();
        
        onSubmitCollaborator(collaborator);

        setCollaborator(initialValue);        
    }

    return (
        <form onSubmit={onSave}>
            <h2 className="title">Preencha os dados para criar o card do collaborator</h2>

            <Field 
                name="nome" 
                label="Nome" 
                placeholder="Digite seu nome" 
                required
                value={collaborator.nome} 
                onChange={handleChange} 
            />

            <Field 
                name="cargo" 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                required
                value={collaborator.cargo} 
                onChange={handleChange}  
            />

            <Field 
                name="imagem" 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                required={false}
                value={collaborator.imagem} 
                onChange={handleChange}  
            />

            <SelectList 
                name="time" 
                label="Time" 
                items={teams.map(t=> t.name)} 
                required
                value={collaborator.time} 
                onChange={handleChange} 
            />

            <Button>Criar card</Button>
        </form>
    )

}

export default CollaboratorForm