import React, { Component } from 'react';
import './ToDoList.css';

class ToDoRow extends  Component {
    render() {
        return (
          <tr className="ToDoRow">
            <td>
              <input type="checkbox" checked={this.props.toDo.done} /> 
            </td>
            <td className="name">
              {this.props.toDo.name}
            </td>
          </tr>
        );
    }
}

class ToDoTable extends Component {
    render() {
        const rows = [];

        this.props.toDoList.forEach((toDo) => {
          rows.push(
            <ToDoRow
                toDo={toDo}
                key={toDo.id} />
          );
        });
    
        return (
          <table className="ToDoTable">
            <thead>
              <tr>
                <th></th>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        );
    }
}

export default ToDoTable;