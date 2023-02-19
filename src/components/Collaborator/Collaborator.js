import './Collaborator.css'

const Collaborator = ({ name, image, position }) => {
    return (
        <div className="collaborator-card">
            <div className="header">
                <img alt={name} src={image} />
            </div>
            <div className="footer">
                <h4>{ name }</h4>
                <h5>{ position }</h5>
            </div>
        </div>
    )
}

export default Collaborator