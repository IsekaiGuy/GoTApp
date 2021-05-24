import React, {useState} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from "../characterPage/characterPage";
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import { ErrorBoundary } from 'react-error-boundary';
import { getAllBooks, getAllHouses } from "../../services/gotService";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div style={{ color: "white" }} className="container">
            <div role="alert">
                <h1>Something went wrong:</h1>
                <pre style={{ color: "white" }}>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        </div>
    )
}

const App = () => {
    const [state, setState] = useState(true);
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
          setSelectedChar(id);
    }
    
    const Toggle = () => {
        setState(!state);
    }

    const char = state ? <RandomChar /> : null;

    return (
        <useStrict>
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{ size: 5, offset: 0 }}>
                        {char}
                        <Button onClick={Toggle} block size="lg" color="primary" style={{ margin: "-20px 0 20px 0" }}>Enable/Disable</Button>
                    </Col>
                </Row>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <CharacterPage />
                </ErrorBoundary>

                <Col md='6'>
                    <ItemList 
                    onCharSelected={onCharSelected} 
                    getData={getAllBooks}
                    renderItem={({name}) => `${name}`}
                    />
                </Col>
                <Col md='6'>
                    <CharDetails charId={selectedChar} />
                </Col>

                <Col md='6'>
                    <ItemList 
                    onCharSelected={onCharSelected} 
                    getData={getAllHouses}
                    renderItem={({name}) => `${name}`}
                    />
                </Col>
                <Col md='6'>
                    <CharDetails charId={selectedChar} />
                </Col>
            </Container>
        </useStrict>
    );
};

export default App;

// git push -f https://github.com/IsekaiGuy/GoTApp.git master