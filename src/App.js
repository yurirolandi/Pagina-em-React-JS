import React from 'react';
import GlobalStyle from './styles/Global';
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux';
import store from './store/index'
import history from './services/history'
import Header from './components/Header/index'
import Routes from './routes'
import { Router } from 'react-router-dom'

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
        </Provider>
    )
}

export default App;