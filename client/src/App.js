import React from "react";
import { Container} from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./compontents/NavBar/NavBar";
import Home from "./compontents/Home/Home";
import Auth from "./compontents/Auth/Auth";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;