import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import MainRoute from './components/MainRoute';
import {store,persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

// const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <BrowserRouter >
                <MainRoute></MainRoute>
                {/* <App isLogin={true}></App> */}
            </BrowserRouter>
        </PersistGate>
    </Provider>
,document.getElementById("app"))