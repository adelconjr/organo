import './Form.css';

import CollaboratorForm from './CollaboratorForm';
import TeamForm from './TeamForm';

const Form = ({ onSubmitCollaborator, insertTeam }) => (
    <section className="main-form"> 
        <CollaboratorForm onSubmitCollaborator={onSubmitCollaborator} />

        <TeamForm insertTeam={insertTeam} />
    </section> 
)

export default Form