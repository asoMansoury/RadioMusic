import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store,persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import reducers from './redux/reducers';

// const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <BrowserRouter >
                <App isLogin={false}></App>
            </BrowserRouter>
        </PersistGate>
    </Provider>
,document.getElementById("app"))