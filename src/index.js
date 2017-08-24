import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import macsampleData from './sample-data';

ReactDOM.render(<App mactables={macsampleData}/>, document.getElementById('root'));
registerServiceWorker();
