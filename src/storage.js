const getData = (DataName) => JSON.parse(localStorage.getItem(DataName));

const saveData = (projects, id) => {
  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('currentId', id);
};