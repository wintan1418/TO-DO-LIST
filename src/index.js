import './styles.scss';

import projectFactory from './factory';
import { initialize, saveData } from './storagedata';
import { displayProjects } from './display'; // eslint-disable-line

const initialData = initialize([], 0);

const { projects } = initialData;

let { id } = initialData;