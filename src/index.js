import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import CreateGlobalStyle from "./styles";

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <CreateGlobalStyle/>
        <App />
    </Provider>
);
