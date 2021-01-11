import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Companies from './Companies';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';
import Company from './Company';
import PrivateRoute from './PrivateRoute';



function Routes({setToken}) {
    return (
        <div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/login">
                <Login setToken={setToken}/>
            </Route>

            <PrivateRoute exact path="/jobs">
                <Jobs />
            </PrivateRoute>

            <PrivateRoute exact path="/profile">
                <Profile />
            </PrivateRoute>

            <PrivateRoute path="/companies/:handle">
                <Company />
            </PrivateRoute>

            <PrivateRoute exact path="/companies">
                <Companies />
            </PrivateRoute>


        </Switch>
        </div>
    )
}

export default Routes;
