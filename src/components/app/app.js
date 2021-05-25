import React, {useState, StrictMode} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from "../../pages/characterPage/characterPage";
import BooksPage from "../../pages/booksPage/booksPage";
import HousesPage from "../../pages/housesPage/housesPage";
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter as Router, Route} from "react-router-dom";
import BooksItems from "../../pages/booksItem";
import "../app/app.scss";

///ERROR CATCH
function ErrorFallback({error, resetErrorBoundary}) {
    return (
        <div style={{
            color: "white"
        }} className="container">
            <div role="alert">
                <h1>Something went wrong:</h1>
                <pre style={{ color: "white" }}>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        </div>
    )
}
////// ////////APP
const App = () => {
    const [state, setState] = useState(true);

    const Toggle = () => {
        setState(!state);
    }

    const char = state ? <RandomChar /> : null;

    return (
        <Router>
            <StrictMode>
                <Container>
                    <Header/>
                </Container>

                <Container>
                    <Row>
                        <Col
                            lg={{
                            size: 5,
                            offset: 0
                        }}>
                            {char}
                            <Button
                                onClick={Toggle}
                                block
                                size="lg"
                                color="primary"
                                style={{
                                margin: "-20px 0 20px 0"
                            }}>Enable/Disable</Button>
                        </Col>
                    </Row>

                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Route path="/characters" exact component={CharacterPage}/>
                    </ErrorBoundary>

                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Route path="/books" exact component={BooksPage}/>
                    </ErrorBoundary>

                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Route path="/houses" exact component={HousesPage}/>
                    </ErrorBoundary>
                            
                    <Route path="/books/:id"
                           render={({ match }) => {
                           const { id } = match.params;
                           return (<BooksItems bookId={id} />);
                           }} />
                </Container>
            </StrictMode>
        </Router>
    );
};

export default App;

// git push -f https://github.com/IsekaiGuy/GoTApp.git master