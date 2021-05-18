import './styles.scss';

import projectFactory from './factory';
import { initialize, saveData } from './storagedata';
import { displayProjects } from './display'; // eslint-disable-line

const initialData = initialize([], 0);

const { projects } = initialData;

let { id } = initialData;
const todoFactory = (title, duedate, desc, note, priority, temp = 'Empty') => {
  if (temp === 'Empty') {
    id += 1;
  } else {
    id = temp;
  }
  return {
    id, title, duedate, desc, note, priority,
  };
};
const deleteItem = (task, project) => {
  const currentProject = projects.find(o => o.name === project.name);
  currentProject.list = currentProject.list.filter(x => x.id !== task.id);

  saveData(projects, id);
  displayProjects(projects);
};

const projectNameList = (list) => {
  projects.forEach((project) => list.push(project.name));
  return list;
};

const validateForm = (title, date, priority) => !(title === '' || date === '' || priority === 'Choose...');

const setAlert = (alert, status) => {
  alert.style.display = 'block';
  if (status === 'success') {
    alert.textContent = 'Task created succesfully!';
    alert.setAttribute('class', 'box alert alert-success');
  } else if (status === 'danger') {
    alert.textContent = 'Title, Date, and Priority are required fields';
    alert.setAttribute('class', 'box alert alert-danger');
  }
};

// save modified data + removing it to the Existing + new projects
const saveModifiedData = (item, project) => {
  const title = document.querySelector('#inputtitle').value.trim();
  const date = document.querySelector('#inputdate').value;
  const description = document.querySelector('#inputdescription').value.trim();
  const note = document.querySelector('#inputnote').value;
  const priority = document.querySelector('#inputpriority').value;
  let projectname = document.querySelector('#inputproject').value.trim().toLowerCase();

  projectname = (projectname === '') ? 'default' : projectname;

  const currentId = item.id;

  const oldProject = projects.find(o => o.name === project.name);

  const newProject = projects.find(o => o.name === projectname);

  const oldTask = oldProject.list.find(x => x.id === currentId);

  const newTask = todoFactory(title, date, description, note, priority, currentId);

  // 1. New project
  // 2. Existing and Same project
  // 3. Existing but different projects

  if (newProject == null) {
    const newProject = projectFactory(projectname);
    newProject.list.push(newTask);
    projects.push(newProject);
    deleteItem(oldTask, oldProject);
  } else if (newProject.name === oldProject.name) {
    newProject.list = newProject.list.map(x => ((x.id === currentId) ? newTask : x));
  } else {
    newProject.list.push(newTask);
    deleteItem(oldTask, oldProject);
  }
  saveData(projects, id);
  displayProjects(projects);

  return false;
};
const modifyItem = (item, project) => {
  const title = document.querySelector('#inputtitle');
  const date = document.querySelector('#inputdate');
  const description = document.querySelector('#inputdescription');
  const note = document.querySelector('#inputnote');
  const priority = document.querySelector('#inputpriority');
  const projectform = document.querySelector('#inputproject');

  title.value = item.title;
  date.value = item.duedate;
  description.value = item.description;
  note.value = item.note;
  priority.value = item.priority;
  projectform.value = project.name;

  const newBtn = document.createElement('button');
  const div = document.querySelector('#btn-div');
  div.innerHTML = '';
  newBtn.setAttribute('class', 'btn btn-primary');
  newBtn.setAttribute('id', 'tasksubmit');
  newBtn.textContent = 'Modify Task';

  div.append(newBtn);
  newBtn.onclick = () => saveModifiedData(item, project);
};

if (projects.length === 0) {
  const defaultProject = projectFactory('default');

  projects.push(defaultProject);
} else {
  displayProjects(projects);
}
const addTaskToProject = (task, project) => {
  const currentProject = projects.find(o => o.name === project);
  currentProject.list.push(task);
  saveData(projects, id);
  displayProjects(projects);
};