import { modifyItem, deleteItem } from './index'; // eslint-disable-line

const formatDate = (input) => {
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
  };

  const date = new Date(input);
  const result = date.toLocaleDateString('en-US', options);
  return result;
};

const displayProjects = (projects) => {
  const projectsMain = document.querySelector('#all-projects-content');
  document.querySelector('#all-projects-content').innerHTML = '';

  projects.forEach((project) => {
    const container = document.createElement('div');
    container.setAttribute('class', ` ${project.name}-project project-box`);
    const heading = document.createElement('h3');
    heading.textContent = project.name;

    const listElement = document.createElement('ul');
    listElement.id = `${project.name}-list`;

    container.append(heading, listElement);
    projectsMain.appendChild(container);

    const listItems = project.list;
    listItems.forEach(item => {
      const listItem = document.createElement('li');
      const customDate = formatDate(item.duedate);

      const taskTitle = document.createElement('span');
      taskTitle.textContent = item.title;

      const taskDate = document.createElement('span');
      taskDate.textContent = customDate;

      const taskPriority = document.createElement('span');
      taskPriority.textContent = item.priority;

      listItem.append(taskTitle, taskDate, taskPriority);

      const modifyBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      modifyBtn.innerHTML = '<img src="https://img.icons8.com/fluent-systems-regular/15/000000/edit-property.png" />';
      modifyBtn.setAttribute('class', ' btn btn-primary');
      deleteBtn.innerHTML = '<img src="https://img.icons8.com/material-sharp/15/000000/delete-forever.png" />';
      deleteBtn.setAttribute('class', 'delete-btn btn btn-danger');
      listItem.setAttribute('class', 'listItem col-md-12');

      modifyBtn.onclick = () => modifyItem(item, project);
      deleteBtn.onclick = () => deleteItem(item, project);

      listItem.append(modifyBtn, deleteBtn);
      listElement.appendChild(listItem);
    });
  });
};

export { displayProjects, formatDate };
