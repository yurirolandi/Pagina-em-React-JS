import React from 'react';
import GlobalStyle from './styles/Global';

import history from './services/history'
import Header from './components/Header/index'
import Routes from './routes'
import { Router } from 'react-router-dom'

function App() {
    return (
        <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyle />
        </Router>
    )
}

export default App;