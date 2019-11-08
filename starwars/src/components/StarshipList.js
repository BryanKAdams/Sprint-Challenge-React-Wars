import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from "styled-components"
import PeopleCard from "./PeopleCard"



const StarshipList = props => {
    const [starship, setStarship] = useState([]);
 


    useEffect(() => {
        axios
            .get(`${props.starships}`)
            .then(response => {
                setStarship(response.data.results);
                console.log(response.data);
            })
            .catch(error => {
                console.log("The data was not returned", error)
                           })
    }, [])
    return (
        <div>
         {/* {starship.map((starship, index) => {
             return <div> {starship} </div>
         })} */}
        </div>
    );
  };
  
  export default StarshipList;
  