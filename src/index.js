import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let model = { clicks: 0}

function render(){
//Modifying this so that the UI changes when the model changes.
ReactDOM.render(<App clicks={model.clicks} 
                    onClick={()=> {model.clicks += 1; render();}}/>, document.getElementById('root'));
}
render();

registerServiceWorker();
