import React, { Component } from 'react';
import './App.css';
import ToDoTable from './ToDoList.js';
import TabPanel from './TabPanel.js';

class App extends Component {
  render() {
    const tabs = [{id:"1", tabName:"ToDoList", tabForm:<ToDoTable toDoList={this.props.toDoList}/>}];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Notebook Application</h1>
        </header>
        <TabPanel tabs={tabs}/>
      </div>
    );
  }
}

export default App;
