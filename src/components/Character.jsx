import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ownCharacter } from '../functions/functions'

const Character = () => {
    const [character,setCharacter] = useState(null)
    const params = useParams()

    console.log(params)

    useEffect(()=>{
        ownCharacter(params.id, setCharacter)
    },[])

    console.log(character)
    
    return (
        <div className="home two">
        {character != null ? (
            <div className="char">
                <h2>Character: {character.name}</h2>
                <h4>With the id of {params.id}/20</h4>
                <img src={character.image} />
                <p><strong>Gender:</strong> {character.gender}</p>
                <p><strong>Species:</strong> {character.species}</p>
                <p><strong>Status:</strong> {character.status}</p>
                <p><strong>Created:</strong> {character.created}</p>
                <p><strong>Location:</strong> {character.location.name}</p>
                <p><strong>Origin:</strong> {character.origin.name}</p>
            </div>
        ) : ("There's no character")}
        </div>
    )
}

export default Character