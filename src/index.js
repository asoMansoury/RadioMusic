import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './redux/reducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <App isLogin={false}></App>
        </BrowserRouter>
    </Provider>
,document.getElementById("app"))