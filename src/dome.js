import { makeTodoCard, editTodoForm } from './componentme';
import Todo from './todome';
import { parser } from './utility';

export function appendTodo(todo, index = null) {
  const rawHTML = makeTodoCard(todo, index);
  const parsedHTML = parser(rawHTML, 'text/html');
  const deleteTodo = parsedHTML.querySelector('[data-delete]');
  const editTaskBtn = parsedHTML.querySelector('#editTaskBtn');
  const editTaskModal = document.querySelector('#editTaskModal');
  const editFormModalContainer = editTaskModal.querySelector('.modal-body');

  deleteTodo.onclick = () => {
    const todoId = deleteTodo.getAttribute('data-delete');
    const todoIndex = deleteTodo.getAttribute('data-index');
    const todo = Todo.get(todoId);

    Todo.delete(todoIndex);
    document.querySelector(`[data-todo-card=${todo.id}]`).remove();
  };

  editTaskBtn.onclick = () => {
    editFormModalContainer.innerHTML = '';
    const todoId = editTaskBtn.getAttribute('data-update');
    const currentTodo = Todo.get(todoId);
    editFormModalContainer.insertAdjacentHTML(
      'beforeend',
      editTodoForm(currentTodo),
    );
  };

  document.getElementById('projectTodos').appendChild(parsedHTML);
}

export function appendProject(project, active = false) {
  const projectTab = document.createElement('a');
  const projectsTree = document.getElementById('projectsTree');

  projectTab.href = '#';
  projectTab.id = project.id;
  projectTab.setAttribute('data-bs-toggle', 'pill');
  projectTab.classList.add('nav-link');
  if (active === true) projectTab.classList.add('active');
  projectTab.innerText = project.name;

  projectTab.onclick = (event) => {
    const allTodos = Todo.getAll();
    const ownTodos = allTodos.filter(
      (todo) => todo.project.id === event.currentTarget.id,
    );

    document.getElementById('projectTodos').innerHTML = '';
    ownTodos.forEach((todo, index) => appendTodo(todo, index));
  };

  projectsTree.appendChild(projectTab);
}

export function getActiveTab() {
  return document.querySelector('#projectsTree .nav-link.active');
}
