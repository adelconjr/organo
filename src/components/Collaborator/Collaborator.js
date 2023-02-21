import './Collaborator.css'

const Collaborator = ({ name, image, position, secondaryColor }) => {
    const headerStyle = {
        backgroundColor: secondaryColor ?? ''
    }

    return (
        <div className="collaborator-card">
            <div className="header" style={headerStyle}>
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