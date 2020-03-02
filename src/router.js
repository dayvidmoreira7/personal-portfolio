import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { 
    Home,
    About,
    Skills,
    Works,
    Contacts,
    NotFound,
} from './pages';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/about" component={() => <About />} />
            <Route exact path="/skills" component={() => <Skills />} />
            <Route exact path="/works" component={() => <Works />} />
            <Route exact path="/contacts" component={() => <Contacts />} />
            <Route component={() => <NotFound />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;