import React, { useState, useEffect } from 'react';
import './itemList.css';

const ItemList = (props) => {
    const [itemList, setItemList] = useState([]);
    const {renderItem} = props;

    useEffect(() => {
        const { getData } = props;

        getData()
            .then(res => setItemList(res))
            .catch(error => { throw new Error("We have a problem:" + error) });
    }, []);

    const renderItems = () => {
        return itemList.map((item, index) => {
        const label = renderItem(item);

        return (<li
            key={index}
            className="list-group-item"
            onClick={() => props.onCharSelected(41 + index)}>
            {label}
        </li>)});
    }

    return (
        <ul className="item-list list-group">
            {renderItems()}
        </ul>
    );
}

export default ItemList;