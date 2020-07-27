import React from 'react';
import ReactDOM from 'react-dom';
import "../src/assets/styles/style.scss"
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,document.getElementById('root')
);

serviceWorker.unregister();
