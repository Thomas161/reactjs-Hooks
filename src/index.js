import React from 'react';
import ReactDOM from 'react-dom';

import App2 from './App2';
//import  App  from "./Redux";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App2 />, document.getElementById('root'));

if(module.hot){
    module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
