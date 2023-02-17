import './Button.css';

export const Button = (props) => {
    return ( 
        <button className="btn-default">{  props.children }</button>
    )
}