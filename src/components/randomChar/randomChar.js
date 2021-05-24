import React, {useEffect, useState} from 'react';
import './randomChar.css';
import { getCharacter } from "../../services/gotService";

const RandomChar = () => {
    const [state, setState] = useState({
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    });

useEffect(() => {
    const id = Math.floor(Math.random() * 300) + 1;

    setTimeout(() => {
        getCharacter(id)
        .then((char) => {
        setState({
            name: char.name === "" ? "n/a" : char.name,
            gender: char.gender === "" ? "n/a" : char.gender,
            born: char.born === "" ? "n/a" : char.born,
            died: char.died === "" ? "n/a" : char.died,
            culture: char.culture === "" ? "n/a" : char.culture
        });
    });
    }, 5000);
});

    const {name, gender, born, died, culture} = state;

        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    
}

export default RandomChar;