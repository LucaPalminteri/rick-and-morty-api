import React, { useEffect, useState } from "react";
import { allCharacters } from "../functions/functions";

const Home = () => {
    const [characters,setCharacters] = useState(null)

    useEffect(()=>{
        allCharacters(setCharacters)
    },[])

    const styles = {
        width: "80px",
        height: "80px"
    }

    return (
        <div className="home">
        {characters != null ? (
            characters.map(character => (
                <div key={character.id}  className="character">
                    <a href={`/character/${character.id}`}>{character.name}</a>
                    <img src={character.image} style={styles} />
                </div>
            ))
        ) : ("There's no characters")}
        </div>
    )
}

export default Home