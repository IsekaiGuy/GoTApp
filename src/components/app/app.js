import React, { useState, StrictMode } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from "../../pages/characterPage/characterPage";
import BooksPage from "../../pages/booksPage/booksPage";
import HousesPage from "../../pages/housesPage/housesPage";
import { ErrorBoundary } from 'react-error-boundary';


///ERROR CATCH
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
//////

//////////APP
const App = () => {
    const [state, setState] = useState(true);

    const Toggle = () => {
        setState(!state);
    }

    const char = state ? <RandomChar /> : null;

    return (
        <StrictMode>
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

                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <BooksPage />
                </ErrorBoundary>

                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <HousesPage />
                </ErrorBoundary>
            </Container>
        </StrictMode>
    );
};

export default App;

// git push -f https://github.com/IsekaiGuy/GoTApp.git master