import { randomID } from '../utils';

export default class Project {
  constructor(name) {
    this.name = name;
    this.id = randomID();
  }

  static get(id) {
    return Project.getAll().find((project) => project.id === id);
  }

  static getAll() {
    return JSON.parse(localStorage.getItem('projects')) || [];
  }
}
