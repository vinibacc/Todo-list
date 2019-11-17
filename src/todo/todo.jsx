import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";

// import { Container } from './styles';

export default class todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      description:'',
      list:[]
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleAdd() {
    console.log(this.state.description)
  }
  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
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
