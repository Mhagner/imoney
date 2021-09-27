import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function Router() {

    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>
    )
}

export default Router