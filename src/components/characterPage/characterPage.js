import React, { useState } from 'react';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import RowBlock from "../rowBlock/rowBlock";
import { getAllCharacters } from "../../services/gotService";

const CharacterPage = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
          setSelectedChar(id);
    }

    const itemList = (
        <ItemList
            onCharSelected={onCharSelected}
            getData={getAllCharacters}
            renderItem={({ name, gender }) => `${name} (${gender})`}
        />
    );

    const charDetails = <CharDetails 
                          charId={selectedChar} 
                        />;

    return (<RowBlock 
              left={itemList} 
              right={charDetails} 
            />)
}

export default CharacterPage;