import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from "styled-components"
import PeopleCard from "./PeopleCard"
import StarshipList from "./StarshipList"

const EntryDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-between;

`
const PrettyButton = styled.button`
margin: 5px;
border: 1px solid gray;
color: black;
background-color: rgb(255, 255, 255, .6);
width: 100px;
height: 40px;
border-radius: 4px;
text-decoration: none;

`



export default function PeopleList() {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/?page=${page}`)
            .then(response => {
                setPeople(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => {
                console.log("The data was not returned", error)
                setPage(page - 1);
            })
    }, [page])
    return (
        <div>

            <EntryDiv className="entry">
                {people.map((people, index) => {
                    return <PeopleCard key={index} name={people.name} height={people.height} mass={people.mass} hair_color={people.hair_color} skin_color={people.skin_color} species={people.species} starships={people.starships} vehicles={people.vehicles} />

                })}
                  {people.map((people, index) => {
                    return <StarshipList key={index} starships={people.starships}  />

                })}
            </EntryDiv>
            {page !== 1 ? (<div><PrettyButton onClick={() => setPage(page - 1)}>Previous</PrettyButton> <PrettyButton onClick={() => setPage(page + 1)}>Next</PrettyButton> </div>) : (<div><PrettyButton onClick={() => setPage(page + 1)}>Next</PrettyButton></div>)}
        </div>
    )



}