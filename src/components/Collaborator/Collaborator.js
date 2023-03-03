import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Collaborator.css'

const Collaborator = ({ id, name, image, position, color, favorite, onDelete, onFavorite }) => {
    const headerStyle = {
        backgroundColor: color
    }

    const avatarName = () => {
        const spl = name.split(' ');
        let initial_letters_name = "";

        if(typeof spl == "object") {

            if(spl.length > 1) {
                for (let i = 0; i < 2; i++) {
                    let n = spl[i];

                    initial_letters_name += n.substring(0, 1);
                }
            }
            else {
                initial_letters_name = spl[0].substring(0, 2);
            }
        }

        return initial_letters_name.toUpperCase();
    }

    const deleteCollaborator = () => {
        onDelete(id);
    }

    const favoriteCard = () => {
        onFavorite(id);
    }

    const favoriteProps = {
        size: 25, 
        onClick: favoriteCard
    }

    return (
        <div className="collaborator-card">
            <AiFillCloseCircle 
                size={25} 
                className="btn-delete" 
                onClick={deleteCollaborator} 
            />

            <div className="card-header" style={headerStyle}>
                { image  
                    ? <img alt={name} src={image} />
                    : <div className='avatar-name'><p style={{color: color }}>{ avatarName() }</p></div>
                }                
            </div>
            
            <div className="card-footer">
                <h4>{ name }</h4>
                <h5>{ position }</h5>

                <div className="favorite">
                    { favorite 
                        ? <AiFillHeart {...favoriteProps} color="#FF0000" /> 
                        : <AiOutlineHeart  {...favoriteProps} /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Collaborator