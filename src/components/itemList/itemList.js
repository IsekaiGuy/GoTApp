import React, {useState, useEffect} from 'react';
import './itemList.css';
import { getAllCharacters } from "../../services/gotService";

const ItemList = (props) => {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        getAllCharacters()
        .then(res => setCharacter(res))
        .catch(error => {throw new Error("We have a problem:" + error)});
    }, []);

const renderItems = () => {
   return character.map((res, index) => (<li 
                                        key={index} 
                                        className="list-group-item"
                                        onClick={() => props.onCharSelected(index)}>
                                            {res.name}
                                        </li>));
}

        return (
            <ul className="item-list list-group">
                {renderItems()}
            </ul>
        );
    }

    export default ItemList;