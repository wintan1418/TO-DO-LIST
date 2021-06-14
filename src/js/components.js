import { format } from 'date-fns';
import { parser } from './utils';

export function makeTodoCard(todo, index = null) {
  return ` 
    <div class="card w-100 mb-3" data-todo-card="${todo.id}">
      <div class="card-body">
        <h5 class="card-title">${todo.title}</h5>
        <p class="card-text">${todo.description} </p>
        <ul class="list-group">
          <li class="list-group-item py-1">Date: ${format(
    todo.date,
    'dd-MM-yyyy',
  )}</li>
          <li class="list-group-item py-1">Priority: ${
  todo.priority
}</li>         
        </ul>
      </div>
      <div class="card-footer">
        <button class="btn py-0" data-index="${index}" data-delete="${
  todo.id
}"><i class="bi bi-trash"></i></button>
        <button id="editTaskBtn" class="btn py-0" data-update="${
  todo.id
}" data-bs-toggle="modal" data-bs-target="#editTaskModal"><i class="bi bi-pencil-fill"></i></button>
      </div>
    </div>`;
}

export function makeTodoForm(todo = {}) {
  const todoForm = parser(`
    <form id="todoForm">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" value="${
  todo.title || ''
}" class="form-control" id="title" name="title" placeholder="What is the title of your task?" required>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" name="description" rows="3" placeholder="What is your task about?" value"${
  todo.description || ''
}" required></textarea>
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input class="form-control" type="date" id="date" name="date" required>
      </div>
      <div class="mb-3">
        <label for="priority" class="form-label">Priotity</label>
        <select class="form-select" id="priority" name="priority" value"${
  todo.priority || 'low'
}">
            <option value="low">Low</option>
            <option value="mid" selected>Mid</option>
            <option value="high">High</option>
        </select>
      </div>
    </form>
  `);

  return todoForm;
}

export function editTodoForm(todo = {}) {
  const todoForm = `
    <form id="editTodoForm" data-todoId=${todo.id}>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" value="${
  todo.title || ''
}" class="form-control" id="title" name="title" placeholder="What is the title of your task?" required>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" name="description" rows="3" placeholder="What is your task about?" required> ${
  todo.description
}
        </textarea>
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input class="form-control" type="date" id="date" name="date" value="${format(
    todo.date,
    'yyyy-MM-dd',
  )}" required>
      </div>
      <div class="mb-3">
        <label for="priority" class="form-label">Priority</label>
        <select class="form-select" id="priority" name="priority">
            <option value="low"${
  todo.priority === 'mid' && 'selected'
}>Low</option>
            <option value="mid" ${
  todo.priority === 'mid' && 'selected'
}>Mid</option>
            <option value="high" ${
  todo.priority === 'mid' && 'selected'
}>High</option>
        </select>
      </div>
    </form>
  `;
  return todoForm;
}
