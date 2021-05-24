import React, {useState} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';

const App = () => {
    const [state, setState] = useState(true);
    const [selectedChar, setSelectedChar] = useState(null);
    
    const Toggle = () => {
        setState(!state);
    }

    const char = state ? <RandomChar /> : null;

    const onCharSelected = (id) => {
        setSelectedChar(id);
        console.log(selectedChar);
    }

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {char}
                        <Button onClick={Toggle} block size="lg" color="primary" style={{margin: "-20px 0 20px 0"}}>Enable/Disable</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={onCharSelected}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={selectedChar}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;

// git push -f https://github.com/IsekaiGuy/GoTApp.git master