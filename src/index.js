import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../src/assets/screens/Home';
import News from '../src/assets/screens/News';
import NewsReader from '../src/assets/views/NewsReader';
import Login from '../src/assets/screens/Login';
import NotFound from './assets/screens/NotFound';

import './styles/index.css';

const App = () => (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/news'} component={News} />
        <Route path={'/news/:id'} component={NewsReader} />
        <Route path={'/login'} component={Login} />
        <Route component={NotFound} />
    </Switch>
);

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));