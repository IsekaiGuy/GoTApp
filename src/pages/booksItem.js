import React from "react";
import ItemDetails, {Field} from "../components/itemDetails/itemDetails";
import {getBook} from "../services/gotService";

const BooksItems = (props) => {

    return (
        <ItemDetails getData={getBook} itemId={props.bookId}>
            <Field field="numberOfPages" label="Number Of Pages"/>
            <Field field="publisher" label="Publisher"/>
            <Field field="released" label="Released"/>
        </ItemDetails>
    )
}

export default BooksItems;
