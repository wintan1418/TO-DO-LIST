const getData = (DataName) => JSON.parse(localStorage.getItem(DataName));

const saveData = (projects, id) => {
  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('currentId', id);
};

const initialize = (projects, id) => {
  if (localStorage.getItem('projects') == null) {
    projects = [];
  } else {
    projects = getData('projects');
  }

  if (localStorage.getItem('currentId') == null) {
    id = 0;
  } else {
    id = getData('currentId');
  }
  return ({ projects, id });
};

export { initialize, saveData };
