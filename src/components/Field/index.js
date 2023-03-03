import './Field.css'

const TextField = ({ type = 'text', name, label, placeholder, required = false, value, onChange }) => {
    const handleChange = (e) => onChange(e);

    return (
        <div className={`field field-${type}`}>
            <label>{ label }</label>

            <input 
                type={type}
                name={name} 
                placeholder={placeholder} 
                required={required} 
                value={value} 
                onChange={handleChange}  
            />
        </div>
    );
}


export default TextField;