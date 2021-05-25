import { randomID } from './utility';

export default class Todo {
  constructor(data) {
    this.title = data.title;
    this.date = new Date(data.date);
    this.description = data.description;
    this.priority = data.priority;
    this.project = data.project;
    this.id = data.id ? data.id : randomID();
  }

  isValid() {
    if (Object.values(this).every((value) => Boolean(value))) return true;
    return false;
  }

  save() {
    const allTodos = Todo.getAll();

    allTodos.push(this);
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }

  static get(id) {
    return Todo.getAll().find((todo) => todo.id === id);
  }

  static getAll() {
    const todoData = JSON.parse(localStorage.getItem('todos')) || [];

    return todoData.map((data) => new Todo(data));
  }

  static update(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static delete(todoIndex) {
    const allTodos = Todo.getAll();

    allTodos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }
}
