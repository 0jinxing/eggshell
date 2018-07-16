import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

fetch("/api/identity/login")
    .then((response) => response.json())
    .then(data => console.log(data));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
