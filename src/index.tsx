import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const { REACT_APP_BASE_URL } = process.env;

ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
