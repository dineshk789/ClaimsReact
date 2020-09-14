import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import DashboardForm from "./home/DashboardForm.jsx";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/home" exact component={DashboardForm} />
                   
                </Switch>
            </Router>
        )
    }
}
