import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";
import { pseudoRandomBytes } from "crypto";

const URL = "http://localhost:3003/api/todos";

export default class todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      list: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.refresh();
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then(res =>
        this.setState({ ...this.state, description, list: res.data })
      );
  }

  handleSearch(){
    this.refresh(this.state.description)
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description })
    .then(res => this.refresh());
  }
  handleClear() {
    this.refresh()
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
    .then(res => this.refresh(this.state.description));
  }
  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(res => this.refresh(this.state.description));
  }
  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(res => this.refresh(this.state.description));
  }

  render() {
    return (
      <div className="container-fluid">
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
