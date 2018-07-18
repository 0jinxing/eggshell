import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reduxer from './reduxers';
import { fetchLogin } from './actions/identity';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import App from './App';

const loggerMiddleware = createLogger();
const store = createStore(
    reduxer,
    applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    )
);
store.dispatch(fetchLogin('321', '321'));

ReactDOM.render(<App msg='gg' regex='^\d*$' name='name' />, document.getElementById('root'));
registerServiceWorker();
