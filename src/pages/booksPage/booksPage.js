import React from 'react';
import ItemList from "../../components/itemList/itemList";
import { getAllBooks } from "../../services/gotService";
import {withRouter} from "react-router-dom";

const BooksPage = (props) => {

    return (
        <ItemList
            onItemSelected={(itemId) => {
                props.history.push(`${itemId} + 1`)
            }}
            getData={getAllBooks}
            renderItem={({ name }) => `${name}`}
        />
        );

}

export default withRouter(BooksPage);