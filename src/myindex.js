import './scss/style.scss';
import { Modal } from 'bootstrap';
import Project from './projectme';
import Todo from './todome';
import { appendTodo, appendProject, getActiveTab } from './dome';
import { makeTodoForm } from './componentme';

const projectForm = document.getElementById('projectForm');
const todoModal = document.getElementById('todoModal');
const submitEditTaskForm = document.getElementById('submitEditTaskFormBtn');

projectForm.onsubmit = (event) => {
  event.preventDefault();

  const projectName = document.getElementById('projectName').value;
  const newProject = new Project(projectName);
  const allProjects = Project.getAll();

  allProjects.push(newProject);
  localStorage.setItem('projects', JSON.stringify(allProjects));
  appendProject(newProject);
  projectForm.reset();
};

submitEditTaskForm.onclick = () => {
  const editTaskForm = document.getElementById('editTodoForm');

  const newTitle = editTaskForm.querySelector('#title').value;
  const newDescription = editTaskForm.querySelector('#description').value;
  const newDate = editTaskForm.querySelector('#date').value;
  const newPriority = editTaskForm.querySelector('#priority').value;

  const todoId = editTaskForm.getAttribute('data-todoId');
  const currentTodo = Todo.get(todoId);
  const allTodos = Todo.getAll();
  const updatedTodo = {
    title: newTitle,
    description: newDescription,
    date: newDate,
    priority: newPriority,
    project: currentTodo.project,
    id: currentTodo.id,
  };

  const updatedTodoArray = allTodos.map((todo) => {
    if (todo.id === todoId) {
      todo = updatedTodo;
    }
    return todo;
  });

  Todo.update(updatedTodoArray);

  document.querySelector('#editTaskClose').click();

  document.getElementById('projectTodos').innerHTML = '';
  Todo.getAll().forEach((todo) => appendTodo(todo));
};

todoModal.addEventListener('show.bs.modal', () => {
  todoModal.querySelector('.modal-body').appendChild(makeTodoForm());

  const todoForm = document.getElementById('todoForm');

  todoForm.onsubmit = (event) => {
    event.preventDefault();

    const todoData = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      date: document.getElementById('date').value,
      priority: document.getElementById('priority').value,
      project: Project.get(getActiveTab().id),
    };

    const newTodo = new Todo(todoData);

    newTodo.save();
    appendTodo(newTodo);

    todoForm.reset();
    Modal.getInstance(document.getElementById('todoModal')).hide();
  };
});

todoModal.addEventListener('hide.bs.modal', () => {
  todoModal.querySelector('.modal-body').innerHTML = '';
});

const allProjects = Project.getAll();

if (allProjects.length > 0) {
  allProjects.forEach((project, index) => {
    const active = index === 0;
    appendProject(project, active);
  });
} else {
  const defaultProject = new Project('Default');

  localStorage.setItem('projects', JSON.stringify([defaultProject]));
  appendProject(defaultProject, true);
}

Todo.getAll().forEach((todo) => {
  if (todo.project.id === getActiveTab().id) appendTodo(todo);
});
