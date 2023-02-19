import React, { useState, useContext } from 'react';

import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

import { TeamsContext } from './contexts/TeamsContext';

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const onSubmitCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator ]);
  };

  const teams = useContext(TeamsContext);

  return (
    <div className="App">
      <Banner />

      <TeamsContext.Provider value={teams.map(t => t.name)}>
        <Form onSubmitCollaborator={onSubmitCollaborator} />
      </TeamsContext.Provider>

      { 
        teams.map(t =>
          <Team 
            key={t.name}
            title={t.name} 
            primaryColor={t.primaryColor} 
            secondaryColor={t.secondaryColor} 
            titleClass={t.underlineClass}
            collaborators={collaborators.filter(c => c.time === t.name)} /> 
        )
      }
      
    </div>
  );
}

export default App;
