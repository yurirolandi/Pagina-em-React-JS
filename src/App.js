import React from 'react';

import Login from './pages/login';
import GlobalStyle from './styles/Global';
import Header from './components/Header/index'

function App() {
    return (
        <>
        <Header />
            <Login />
            <GlobalStyle />
        </>
    )
}

export default App;