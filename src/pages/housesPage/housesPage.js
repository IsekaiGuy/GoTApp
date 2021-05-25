import React, { useState } from 'react';
import ItemList from "../../components/itemList/itemList";
import ItemDetails, {Field} from "../../components/itemDetails/itemDetails";
import RowBlock from "../../components/rowBlock/rowBlock";
import { getAllHouses, getHouse } from "../../services/gotService";

const HousesPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const onItemSelected = (id) => {
          setSelectedItem(id + 41);
    }

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={getAllHouses}
            renderItem={({ name }) => `${name}`}
        />
    );

    const itemDetails = (
        <ItemDetails getData={getHouse} itemId={selectedItem}>
            <Field field="region" label="Region"/>
            <Field field="words" label="Words"/>
            <Field field="titles" label="Titles"/>
            <Field field="culture" label="Culture"/>
            <Field field="coatOfArms" label="Coat of Arms"/>
        </ItemDetails>
    );

    return (
        <RowBlock 
            left={itemList} 
            right={itemDetails} 
        />
        );

}

export default HousesPage;