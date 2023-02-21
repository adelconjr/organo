import Collaborator from '../Collaborator'
import './Team.css'

const Team = ({collaborators, title, titleClass, primaryColor, secondaryColor}) => {
    const style = { backgroundColor: primaryColor }

    return (
        collaborators.length > 0 &&
            <section className="team" style={style}>
                <h3 className={titleClass}>{title}</h3>

                <div className="collaborators">
                    { collaborators.map(c => <Collaborator key={c.nome} name={c.nome} image={c.imagem} position={c.cargo} secondaryColor={secondaryColor} /> ) }
                </div>
            </section>
    )
}

export default Team