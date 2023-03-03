import Collaborator from '../Collaborator'
import './Team.css'
import hexToRgba from 'hex-to-rgba'

const Team = ({collaborators, id, title, titleClass, color, changeTeamColor, deleteCollaborator, favoriteCollaborator}) => {
    const sectionStyle = { backgroundColor: hexToRgba(color, 0.2) }

    const titleSpn = { backgroundColor: color }

    const onDelete = (id) => {
        deleteCollaborator(id);
    }

    const onFavorite = (id) => {
        favoriteCollaborator(id)
    }

    return (
        collaborators.length > 0 &&
            <section className="team" style={sectionStyle}>
                <input value={color} onChange={e => { changeTeamColor(e.target.value, id) }} type="color" className="input-color-collaborator" />

                <h3 className={titleClass}>
                    {title}

                    <span style={titleSpn} />
                </h3>

                <div className="collaborators">
                    { collaborators.map(
                        c => (
                            <Collaborator 
                                key={c.id}
                                id={c.id}
                                name={c.nome}
                                image={c.imagem}
                                position={c.cargo}
                                color={color}
                                favorite={c.favorite}
                                onDelete={onDelete}
                                onFavorite={onFavorite}
                            /> 
                        ))
                    }
                </div>
            </section>
    )
}

export default Team