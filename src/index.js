import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reduxer from './reduxers';
import VerificationInput from './components/VerificationInput';
import { fetchLogin } from './actions/identity';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();
const store = createStore(
    reduxer,
    applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    )
);

ReactDOM.render(<VerificationInput msg='gg' regex='^\d*$' name='name' />, document.getElementById('root'));
registerServiceWorker();
