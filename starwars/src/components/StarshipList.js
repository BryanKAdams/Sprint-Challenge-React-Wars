import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from "styled-components"
import PeopleCard from "./PeopleCard"



const StarshipList = props => {
    const [starship, setStarship] = useState([]);
 


    useEffect(() => {
        axios
            .get(`${props.starships.map(function (starship, index){return starship})}`)
            .then(response => {
                // setStarship(response.data.forEach(function(starship, index){return starship}));
                console.log(response.data.name);
            })
            .catch(error => {
                console.log("The data was not returned", error)
                           })
    }, [])
    return (
        <div>
         {console.log(props.starships.map(function (starship, index){return starship}))}
        </div>
    );
  };
  
  export default StarshipList;
  