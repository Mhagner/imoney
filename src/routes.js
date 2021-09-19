import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function Router() {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
    )
}

export default Router