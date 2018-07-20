import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexLayout from './components/IndexLayout';

const App = () => (
    <BrowserRouter>
        <IndexLayout />
    </BrowserRouter>
);

export default App;