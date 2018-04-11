import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var ToDoList = [
    {id: "1", done: true, name: "Football"},
    {id: "2", done: true, name: "Wash it"},
    {id: "3", done: false, name: "Dry it"},
    {id: "4", done: false, name: "Place it"},
    {id: "5", done: true, name: "Move it"}
  ];


ReactDOM.render(<App toDoList={ToDoList}/>, document.getElementById('root'));
registerServiceWorker();
