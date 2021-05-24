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

const char = () => {
    const id = Math.floor(Math.random() * 300) + 1;
        getCharacter(id)
        .then((char) => {
        setState(char);
    });
}

useEffect(() => {
    char();
}, []);

useEffect(() => {
    setTimeout(() => {
        char();
    }, 5000);

}, [state]);

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