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