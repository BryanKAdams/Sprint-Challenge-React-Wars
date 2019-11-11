import React from "react";
import styled from "styled-components"

const StyledCard = styled.div`
width: 24%;
border: 1px solid black;
background-color: rgb(255, 255, 255, .4);
margin: 5px;
`
const StyledH3 = styled.h3`
#text{
    max-width: 20px;
}
`

const PeopleCard = props => {
  return (
    <StyledCard className="people-card">
      <h2>Name: {props.name}</h2>
      <h3>Height: {props.height}</h3>
      <h3>Mass: {props.mass}</h3>
      <h3>Hair color: {props.hair_color}</h3>
      <h3>Skin color: {props.skin_color}</h3>
      <h3>Species: {props.species}</h3>
      <StyledH3>Vehicles: {props.vehicles.map(function(vehicle, index){
          return <p key ={index}>{vehicle}</p>
      })}</StyledH3>
      <StyledH3>Starships: {props.starships.map(function(starship, index){
      return <p key ={index}>{starship}</p>})} </StyledH3>
    </StyledCard>
  );
};

export default PeopleCard;
