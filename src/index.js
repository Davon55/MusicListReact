import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//Displayes the entire application in place on the web page identified as 'root'
const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);


root.render( <BrowserRouter><App /> </BrowserRouter>)