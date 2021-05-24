import React, {useEffect, useState} from 'react';
import './randomChar.css';
import { getCharacter } from "../../services/gotService";

const RandomChar = () => {
    const [state, setState] = useState({
        char: {},
        error: null
    });

const char = () => {
    const id = Math.floor(Math.random() * 300) + 1;
        getCharacter(id)
        .then((char) => {setState(char)})
        .catch((error) => setState({error: error}));
}

useEffect(() => {
    char();
}, []);

useEffect(() => {
    const timerid = setTimeout(() => {
        char();
    }, 5000);

return () => clearTimeout(timerid);
}, [state]);

    const {name, gender, born, died, culture} = state;

        return (
            <div className="random-block rounded">
                {state.error ? <h4>"SOMETHING WENT WRONG"</h4> : <h4>Random Character: {name}</h4>}
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