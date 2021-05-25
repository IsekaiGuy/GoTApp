import React, { useState } from 'react';
import ItemList from "../../components/itemList/itemList";
import ItemDetails, {Field} from "../../components/itemDetails/itemDetails";
import RowBlock from "../../components/rowBlock/rowBlock";
import { getAllBooks, getBook } from "../../services/gotService";

const BooksPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const onItemSelected = (id) => {
          setSelectedItem(id + 1);
    }

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={getAllBooks}
            renderItem={({ name }) => `${name}`}
        />
    );

    const itemDetails = (
        <ItemDetails getData={getBook} itemId={selectedItem}>
            <Field field="numberOfPages" label="Number Of Pages"/>
            <Field field="publisher" label="Publisher"/>
            <Field field="released" label="Released"/>
        </ItemDetails>
    );

    return (
        <RowBlock 
            left={itemList} 
            right={itemDetails} 
        />
        );

}

export default BooksPage;