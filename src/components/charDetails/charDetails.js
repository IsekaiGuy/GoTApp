import React, {useState, useEffect} from 'react';
import './charDetails.css';
import { getCharacter } from "../../services/gotService";

const CharDetails = (props) => {
    const [char, setChar] = useState(null);

    useEffect(() => {
        const updateChar = () => {
            const { charId } = props;
            if (!charId) {
                return;
            }
            getCharacter(charId)
                .then((res) => setChar(res))
                .catch(error => { throw new Error("We have a problem:" + error) });
            }

        updateChar();
    }, [props]);

    
        
        if (char === null) {
            return <span className="select-error">Please select character</span>;
        }

        const {name, gender, born, died, culture} = char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    
}

export default CharDetails;