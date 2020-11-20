import React from "react";
import { Switch, Route } from "react-router-dom";

function Routes() {
    return (
        <div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/companies">
                <Companies />
            </Route>

            <Route exact path="/jobs">
                <Jobs />
            </Route>

            <Route exact path="login">
                <Login />
            </Route>

            <Route exact path="/profile">
                <Profile />
            </Route>

            <Route path="/companies/:handle">
                <Company />
            </Route>
        </Switch>
        </div>
    )
}

export default Routes;



//home
//companies
//companies:handle
//jobs
//login
//profile