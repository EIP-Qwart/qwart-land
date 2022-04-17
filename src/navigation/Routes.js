import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import Home from "../pages/Home";

const Routes = ({t}) => {
    return (
        <Switch>
            <Route path="/">
                <Home t={t}/>
            </Route>
            <Route path="/home" exact component={Home} />
            <Route component={NotFound} t={t}/>
        </Switch>
    );
};

export default Routes;