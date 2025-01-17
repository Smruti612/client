import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThirdwebProvider} from '@thirdweb-dev/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider> 
        <Router>
            <App/>
        </Router>
    </ThirdwebProvider>
)