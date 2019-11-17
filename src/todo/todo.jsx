import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";


const URL = 'http://localhost:3003/api/todos'


export default class todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      list: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleAdd() {
    const description = this.state.description
    axios.post(URL,{description}).then(res => console.log('Funcionou'))
  }
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }
  render() {
    return (
      <div className="container-fluid">
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleChange={this.handleChange}
        />
        <TodoList />
      </div>
    );
  }
}
