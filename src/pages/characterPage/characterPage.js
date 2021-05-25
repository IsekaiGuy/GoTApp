import React, { useState } from 'react';
import ItemList from '../../components/itemList/itemList';
import ItemDetails from '../../components/itemDetails/itemDetails';
import RowBlock from "../../components/rowBlock/rowBlock";
import { getAllCharacters, getCharacter } from "../../services/gotService";
import { Field } from "../../components/itemDetails/itemDetails";

const CharacterPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const onItemSelected = (id) => {
          setSelectedItem(id + 41);
    }

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={getAllCharacters}
            renderItem={({ name, gender }) => `${name} (${gender})`}
        />
    );

    const itemDetails = (
    <ItemDetails getData={getCharacter} itemId={selectedItem}>
        <Field field="gender" label="Gender"/>
        <Field field="born" label="Born"/>
        <Field field="died" label="Died"/>
        <Field field="culture" label="Culture"/>
    </ItemDetails>
);

    return (
        <RowBlock 
            left={itemList} 
            right={itemDetails} 
        />
        );
}

export default CharacterPage;