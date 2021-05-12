import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { useStateValue } from "./StateProvider";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

const App = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <Main>
            {!user ? (
                <Login />
            ) : (
                <Router>
                    <Sidebar />
                    <Switch>
                        <Route path="/rooms/:roomId">
                            <Chat />
                        </Route>
                        <Route path="/">
                            <Chat />
                        </Route>
                    </Switch>
                </Router>
            )}
        </Main>
    );
};

export default App;

const Main = styled.main`
    display: flex;
    background-color: #ededed;
    margin: 5vh auto;
    height: 90vh;
    width: 90vw;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;
