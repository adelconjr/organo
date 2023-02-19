import './SelectList.css';

export const SelectList = (props) => {
    const onChange = (e) => props.onChange(e);

    return (
        <div className="select-list">
            <label>{props.label}</label>
            <select placeholder="Teste" name={props.name} required={props.required} value={props.value} onChange={onChange}>
                { 
                    props.items
                        .map( item => 
                            <option value={item} key={`select-${item}`}>{ item }</option>
                        ) 
                }
            </select>
        </div>
    )
}