import React from 'react';
import './itemList.css';
// import useGotService from "../../services/gotService";


const ItemList = () => {
    // const getItemList = useGotService("/characters?page=5");
    // getItemList.then(res => console.log(res));

        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }

    export default ItemList;