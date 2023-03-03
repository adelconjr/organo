import React, { useState, useContext } from 'react';

import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

import { TeamsContext } from './contexts/TeamsProvider';

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const onSubmitCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator ]);
  };

  const [teams, setTeams] = useContext(TeamsContext);

  const insertTeam = (team) => {
    setTeams([...teams, team]);
  }

  const changeTeamColor = (color, id) => {
      setTeams(
        teams.map(t => {
            if(t.id === id) {
              t.color = color;
            }

            return t;
        })
      );
  }

  function deleteCollaborator(id) {
    setCollaborators(
      collaborators.map(collaborator => {
        if(collaborator.id === id) {
          return false
        }

        return collaborator;
      })
    );
    
  }

  function favoriteCollaborator(id) {
    setCollaborators(
      collaborators.map(collaborator => {
        if(collaborator.id === id) collaborator.favorite = !collaborator.favorite;

        return collaborator;
      })
    );
  }

  return (
    <div className="App">
      <Banner />

      <Form
        insertTeam={insertTeam}
        onSubmitCollaborator={onSubmitCollaborator} />

      { 
        teams.map(t =>
          <Team 
            key={t.id}
            id={t.id}
            title={t.name} 
            color={t.color} 
            titleClass={t.underlineClass}
            collaborators={collaborators.filter(c => c.time === t.name)}
            changeTeamColor={changeTeamColor}
            deleteCollaborator={deleteCollaborator}
            favoriteCollaborator={favoriteCollaborator} /> 
        )
      }
      
      <Footer />
      
    </div>
  );
}

export default App;
