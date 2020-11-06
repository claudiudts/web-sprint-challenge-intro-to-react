import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';
import './App.css';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    
    const fetchCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setCharacterList(res.data.results)
      })
      .catch(err => console.log(err))
    }
    fetchCharacters();
  }, [])

  return (
    <div className="App">
      <h1 className="Header">People of Rick and Morty</h1>
      <Character characterList={characterList} />
    </div>
  );
}

export default App;
