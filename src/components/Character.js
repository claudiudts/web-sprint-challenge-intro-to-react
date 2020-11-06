// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../theme.js';


const StyledCharacter = styled.div`
color: ${pr => pr.theme.primaryColor};
font-weight: bold;


&:hover{
  transform: scale(1.10);
  transition: width 2s, height 2s, transform 2s
  }
`


export default function Character(props){
  const {characterList} = props

  const characterCard = characterList.map(character => {
    return <StyledCharacter key={character.id}>
      <ul>
        <h3>Name: {character.name}</h3>
        <h4>Species: {character.species}</h4>
        <h4>Gender: {character.gender}</h4>
        <img src={character.image}/>
      </ul>
    </StyledCharacter>
  })

  return characterCard
}