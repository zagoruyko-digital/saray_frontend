import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../src/assets/screens/Home';
import News from '../src/assets/screens/News';
//import NewsReader from '../src/assets/views/NewsReader';
import NewsReader from './assets/views/NewsList/NewsReader/index';
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


import { spring, AnimatedSwitch } from 'react-router-transition';

import HomePage from './assets/HomePage';
import BookingPage from './assets/BookingPage';
import NewsPage from './assets/NewsPage';
import NewsView from './assets/NewsPage/List/NewsView';
import StockPage from './assets/StockPage';

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

const AppNewAnimated = () => (
    <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
    >
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/booking'} component={BookingPage} />
        <Route exact path={'/news'} component={NewsPage} />
        <Route path={'/news/:id'} component={NewsView} />
        <Route exact path={'/stock'} component={StockPage} />
    </AnimatedSwitch>
);

const AppNew = () => (
    <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/booking'} component={BookingPage} />
        <Route exact path={'/news'} component={NewsPage} />
        <Route path={'/news/:id'} component={NewsView} />
        <Route exact path={'/stock'} component={StockPage} />
    </Switch>
);

render((
    <BrowserRouter>
        <AppNew />
    </BrowserRouter>
), document.getElementById('app'));