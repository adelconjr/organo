import { useState } from 'react'
import Button from '../Button'
import SelectList from '../SelectList'
import TextField from '../TextField'

import './Form.css';

export const Form = () => {
    const [colaborador, setColaborador] = useState({
        nome: '',
        cargo: '',
        imagem: '',
        time: ''
    });

    const items = [
        "",
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const handleChange = (e) => {
        const {name, value} = e.target;

        console.log(name);

        setColaborador(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const onSave = (e) => {
        e.preventDefault();

        console.log(colaborador);
    }

    return (
        <section className="main-form">
            <form onSubmit={onSave}>
                <h2 className="title">Preencha os dados para criar o card do colaborador</h2>

                <TextField name="nome" label="Nome" placeholder="Digite seu nome" required={true} value={colaborador.nome} onChange={handleChange} />
                <TextField name="cargo" label="Cargo" placeholder="Digite seu cargo" required={false} value={colaborador.cargo} onChange={handleChange}  />
                <TextField name="imagem" label="Imagem" placeholder="Informe o endereço da imagem" required={false} value={colaborador.imagem} onChange={handleChange}  />

                <SelectList name="time" label="Time" items={items} required={true} value={colaborador.time} onChange={handleChange} />

                <Button>Criar card</Button>
            </form>
        </section>
    )
}