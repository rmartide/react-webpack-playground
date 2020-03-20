import ReactDom from 'react-dom';
import React from 'react';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import { reducer } from './redux/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);