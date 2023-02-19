import './TextField.css'

const TextField = (props) => {
    const handleChange = (e) => props.onChange(e);

    return (
        <div className="campo-texto">
            <label>{ props.label }</label>
            <input name={props.name} placeholder={props.placeholder} required={props.required} value={props.value} onChange={handleChange}  />
        </div>
    );
}


export default TextField;