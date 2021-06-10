import Project from '../src/projectme';
import Todo from '../src/todome';

describe('todo', () => {
  const todo = new Todo('Test todo');

  describe('constructor', () => {
    it('creates an instance of a new name', () => {
      expect(todo instanceof Todo).toBe(true);
    });
    it('creates an instance of a descrption', () => {
      const description = new Todo('do this');
      expect(description instanceof Todo).toBe(true);
    });
    it('creates a new todo instance', () => {
      const todo = new Todo('do this');
      expect(todo instanceof Todo).toBe(true);
    });
    it('creates an instance of a new priority', () => {
      const priority = new Todo('do this');
      expect(priority instanceof Todo).toBe(true);
    });
    it('creates an instance of a new date', () => {
      const date = new Date();
      expect(date instanceof Date).toBe(true);
    });
  });

  describe('getAll', () => {
    test('gives instance of all returned objects to todo', () => {
      expect(Todo.getAll().every((todo) => todo instanceof Todo)).toBe(true);
    });
  });
});

describe('delete', () => {
  const todo = 'I am going south';
  const todoDelete = Project.getAll().length;
  it('deletes task from localStorage', () => {
    todo.Delete;
    const todoCheck = Project.getAll().length;
    todoDelete !== todoCheck;
  });
});

describe('update', () => {
  let update = 'I am going south';
  const updateSave = update.id;
  it('update task from localStorage', () => {
    update = 'I am going north';
    updateSave === update;
  });
});
