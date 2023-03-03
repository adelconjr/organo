import React, { useState } from "react"

export const CollaboratorsContext = React.createContext(null);

const CollaboratorsProvider = ({ children }) => {
    const [collaborators, setCollaborators] = useState([]);

    return <CollaboratorsContext.Provider value={[collaborators, setCollaborators]}>{ children }</CollaboratorsContext.Provider>
}

export default CollaboratorsProvider;