import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";


// import { Container } from './styles';

export default class todo extends Component {
  render() {
    return (
      <div className="container-fluid">
        <PageHeader name='Tarefas' small='Cadastro'/>
        <TodoForm/>
        <TodoList/>
      </div>
    );
  }
}
